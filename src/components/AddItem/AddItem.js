import { useState, useEffect, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import UserContext from '../../contexts/UserContext'

import errorHandler from '../../utils/errorHandler'
import validateData from '../../utils/validator'



const AddGames = () => {

    const history = useHistory()
    const { userData } = useContext(UserContext)

    const type = history.location.pathname.split('/add/')[1]

    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])

    useEffect(() => {
        if (type === 'game') {
            genreService.getAll().then(res => setGenres(res)).catch(errorHandler)
            devService.getAll().then(res => setDevs(res)).catch(errorHandler)
        }
    }, [type])

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        let title = e.target.title.value
        let image = e.target.image.value
        let description = e.target.description.value
        let moreInfo = type === 'game' ? e.target.moreInfo.value : undefined
        let videoUrl = type === 'game' ? e.target.videoUrl.value : undefined
        let genre = type === 'game' ? e.target.genre.value : undefined
        let dev = type === 'game' ? e.target.dev.value : undefined

        const dataIsValid = await validateData({ title, image, description, videoUrl })
        if (!dataIsValid) return

        try {
            if (type === 'game') {
                let gameRes = await gameService.add({ title, image, description, moreInfo, videoUrl, genre, dev }, userData.user.id)
                if (gameRes.data) history.push('/games')
            }
            if (type === 'genre') {
                let genreRes = await genreService.add({ title, image, description }, userData.user.id)
                if (genreRes.data) history.push('/genres')
            }
            if (type === 'dev') {
                let devRes = await devService.add({ title, image, description }, userData.user.id)
                if (devRes.data) history.push('/devs')
            }
        } catch (err) { errorHandler(err) }
    }

    return (
        <section>

            <header>
                <h1>Add {type}</h1>
            </header>

            <article>
                <form onSubmit={onSubmitHandler}>

                    <input type="text" name="title" placeholder={type + ' name'} />
                    <input type="text" name="image" placeholder="image url" />

                    <textarea type="text" name="description" placeholder={type + ' description'}></textarea>

                    {
                        type === 'game' ? <>
                            <input type="text" name="videoUrl" placeholder="gameplay video" />
                        </> : null
                    }

                    {
                        type === 'game' ? <>
                            <textarea type="text" name="moreInfo" placeholder="more information about the game"></textarea>
                        </> : null
                    }

                    {
                        type === 'game' ? <>
                            <select name="genre">
                                {genres.map(x => <option key={x._id} value={x._id}>{x.title}</option>)}
                            </select>

                            <select name="dev">
                                {devs.map(x => <option key={x._id} value={x._id}>{x.title}</option>)}
                            </select>
                        </> : null
                    }

                    <button>Add {type}</button>

                </form>
            </article>

            <ToastContainer />

        </section>
    )
}

export default AddGames