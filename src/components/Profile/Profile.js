import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { useHistory } from 'react-router-dom'

import userService from '../../services/userService'
import errorHandler from '../../utils/errorHandler'

import Card from '../Card'

import './Profile.css'



const Profile = () => {

    const history = useHistory()
    const { username } = useRouteMatch().params

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            try {
                let userData = await userService.getOne(username)
                if (!userData) history.push('/')
                setUserInfo(userData)
            } catch (err) { errorHandler(err) }
        }
        fetchData()

    }, [username, history])

    return (
        <section>

            <header>
                <h1>{`${username}'s Profile`}</h1>
            </header>

            <article className="upvoted-items">
                {userInfo.upvotedGames ? userInfo.upvotedGames.length ?
                    <div className="games">
                        <h2>Games</h2>
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
                        <h2>Genres</h2>
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
                        <h2>Devs</h2>
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

        </section >
    )
}



export default Profile