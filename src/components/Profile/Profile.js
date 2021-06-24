import { useEffect, useState, useContext } from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import errorHandler from '../../utils/errorHandler'

import UserContext from '../../contexts/UserContext'

import userService from '../../services/userService'

import Card from '../Card'

import './Profile.css'



const Profile = () => {

    const history = useHistory()
    const { username } = useRouteMatch().params

    const { userData, setUserData } = useContext(UserContext)

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            try {
                let reqUserData = await userService.getOne(username)
                if (!reqUserData) history.push('/NotFound')
                setUserInfo(reqUserData)
            } catch (err) { errorHandler(err) }
        }
        fetchData()

    }, [username, history])

    const onNameChangeSubmit = async (e) => {
        e.preventDefault()
        try {

            const newUsername = e.target.username.value
            if (!newUsername) throw new Error('You cannot change your username to none')
            if (newUsername.length < 8) throw new Error('New Username must be at least 8 symbols long')

            let res = await userService.changeUsername(newUsername, userData.user.id)
            if (res) {
                toast.success(`Username changed`)
                let token = localStorage.getItem('auth-token')
                setUserData({ token, user: { username: res.username, id: res._id, email: res.email } })
            }

        } catch (err) { errorHandler(err) }
    }

    return (
        <section>

            <header>
                <h1>{`${username}'s Profile`}</h1>

                {userData.user ? userData.user.id === userInfo._id ?
                    <form onSubmit={onNameChangeSubmit}>
                        <input type="text" name="username" placeholder="New Username" />
                        <button>Change Username</button>
                    </form> : null : null}

            </header>

            <article className="upvoted-items">
                {userInfo.upvotedGames ? userInfo.upvotedGames.length ?
                    <div className="games">
                        <h2>Upvoted Games</h2>
                        {userInfo.upvotedGames.map(x =>
                            <Card
                                key={x._id}
                                id={x._id}
                                title={x.title}
                                image={x.image}
                                type="games"
                            />)}
                    </div> :
                    <p>This user haven't upvoted any Games yet</p> : null}

                {userInfo.upvotedGenres ? userInfo.upvotedGenres.length ?
                    <div className="genres">
                        <h2>Upvoted Genres</h2>
                        {userInfo.upvotedGenres.map(x =>
                            <Card
                                key={x._id}
                                id={x._id}
                                title={x.title}
                                image={x.image}
                                type="genres"
                            />)}
                    </div> :
                    <p>This user haven't upvoted any Genres yet</p> : null}

                {userInfo.upvotedDevs ? userInfo.upvotedDevs.length ?
                    <div className="devs">
                        <h2>Upvoted Devs</h2>
                        {userInfo.upvotedDevs.map(x =>
                            <Card
                                key={x._id}
                                id={x._id}
                                title={x.title}
                                image={x.image}
                                type="devs"
                            />)}
                    </div> :
                    <p>This user haven't upvoted any Developers yet</p> : null}

            </article>
            <ToastContainer />
        </section >
    )
}



export default Profile