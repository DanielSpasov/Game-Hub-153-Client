import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'
import validateData from '../../utils/validator'

import '../../common-css/fields.css'



const Edit = () => {

    const match = useRouteMatch()
    const history = useHistory()
    const type = history.location.pathname.split('/')[1]

    const [item, setItem] = useState({})

    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])


    useEffect(() => {

        const getItem = async () => {

            if (type === 'games') {
                const game = await gameService.getOne(match.params.itemID)
                setItem(game)
                setGenre(game.genre._id)
                setDev(game.dev._id)
                const genres = await genreService.getAll()
                setGenres(genres)
                const devs = await devService.getAll()
                setDevs(devs)
            }

            if (type === 'genres') {
                const genre = await genreService.getOne(match.params.itemID)
                setItem(genre)
            }

            if (type === 'devs') {
                const dev = await devService.getOne(match.params.itemID)
                setItem(dev)
            }
        }
        getItem()


    }, [match.params.itemID, type])

    let title = item.title
    let image = item.image
    let description = item.description
    let moreInfo = item.moreInfo
    let videoUrl = item.videoUrl
    const [genre, setGenre] = useState('')
    const [dev, setDev] = useState('')

    const onTitleChangeHandler = (e) => title = e.target.value
    const onImageChangeHandler = (e) => image = e.target.value
    const onDescriptionChangeHandler = (e) => description = e.target.value
    const onMoreInfoChangeHandler = (e) => moreInfo = e.target.value
    const onVideoUrlChangeHandler = (e) => videoUrl = e.target.value
    const onGenreChangeHandler = (e) => setGenre(e.target.value)
    const onDevChangeHandler = (e) => setDev(e.target.value)

    const editSubmitHandler = async (e) => {
        e.preventDefault()

        const dataIsValid = await validateData({ title, image, description, videoUrl })
        if (!dataIsValid) return

        try {
            if (type === 'games') {
                let gameInfo = { title, image, description, moreInfo, videoUrl, genre, dev }
                const response = await gameService.editOne(match.params.itemID, gameInfo)
                if (response) history.push(`/games/${match.params.itemID}`)
            }
            if (type === 'genres') {
                let genreInfo = { title, image, description }
                const response = await genreService.editOne(match.params.itemID, genreInfo)
                if (response) history.push(`/genres/${match.params.itemID}`)
            }
            if (type === 'devs') {
                let devInfo = { title, image, description }
                const response = await devService.editOne(match.params.itemID, devInfo)
                if (response) history.push(`/devs/${match.params.itemID}`)
            }
        } catch (err) { errorHandler(err) }
    }

    return (
        <section>

            <header>
                <h1>Edit <b>{item.title}</b>'s Information</h1>
            </header>

            <article>
                <form onSubmit={editSubmitHandler}>

                    <input type="text" name="title" placeholder={type + ' name'} defaultValue={item.title} onChange={onTitleChangeHandler} />
                    <input type="text" name="image" placeholder="image url" defaultValue={item.image} onChange={onImageChangeHandler} />

                    <textarea type="text" name="description" placeholder={type + ' description'} defaultValue={item.description} onChange={onDescriptionChangeHandler}></textarea>

                    {
                        type === 'games' ? <>
                            <input type="text" name="videoUrl" placeholder="gameplay video" defaultValue={item.videoUrl} onChange={onVideoUrlChangeHandler} />
                        </> : null
                    }

                    {
                        type === 'games' ? <>
                            <textarea type="text" name="moreInfo" placeholder="more information about the game" defaultValue={item.moreInfo} onChange={onMoreInfoChangeHandler}></textarea>
                        </> : null
                    }

                    {
                        type === 'games' ? <>
                            <select name="genre" value={genre} onChange={onGenreChangeHandler}>
                                {genres.map(x => <option key={x._id} value={x._id} >{x.title}</option>)}
                            </select>

                            <select name="dev" value={dev} onChange={onDevChangeHandler}>
                                {devs.map(x => <option key={x._id} value={x._id}>{x.title}</option>)}
                            </select>
                        </> : null
                    }

                    <button>Edit Info</button>

                </form>
            </article>

            <ToastContainer />

        </section>
    )
}

export default Edit