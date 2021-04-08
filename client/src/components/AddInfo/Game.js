import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from "react"
import { useRouteMatch, useHistory } from 'react-router-dom'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import InputField from '../Common/InputField/InputField'
import Textarea from '../Common/Textarea/Textarea'

import errorHandler from '../../utils/errorHandler'
import validator from '../../utils/validator'

import './AddInfo.css'

const AddGameInfo = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [game, setGame] = useState(null)
    const [genres, setGenres] = useState(null)
    const [devs, setDevs] = useState(null)

    const [title, setTitle] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [intro, setIntro] = useState(null)
    const [moreInfo, setMoreInfo] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)
    const [genre, setGenre] = useState(null)
    const [dev, setDev] = useState(null)

    useEffect(() => {
        gameService.getOne(match.params.gameId)
            .then(res => setGame(res))
            .then(() => {
                setTitle(game?.title)
                setImageUrl(game?.imageUrl)
                setIntro(game?.intro)
                setMoreInfo(game?.moreInfo)
                setVideoUrl(game?.videoUrl)
                setGenre(game?.genre)
                setDev(game?.dev)
            }).catch(errorHandler)
        genreService.getAll().then(res => setGenres(res)).catch(errorHandler)
        devService.getAll().then(res => setDevs(res)).catch(errorHandler)
    }, [match.params.gameId, game?.title, game?.imageUrl, game?.intro, game?.moreInfo, game?.videoUrl, game?.genre, game?.dev])



    const onTitleChangeHandler = (e) => setTitle(e.target.value)
    const onImageUrlChangeHandler = (e) => setImageUrl(e.target.value)
    const onIntroChangeHandler = (e) => setIntro(e.target.value)
    const onMoreInfoChangeHandler = (e) => setMoreInfo(e.target.value)
    const onVideoUrlChangeHandler = (e) => setVideoUrl(e.target.value)
    const onGenreChangeHandler = (e) => setGenre(e.target.value)
    const onDevChangeHandler = (e) => setDev(e.target.value)

    const onAddInfoSubmitHandler = (e) => {
        e.preventDefault()

        validator({ title, imageUrl, videoUrl })
        let gameInfo = { title, imageUrl, intro, moreInfo, videoUrl, genre, dev }
        gameService.editOne(match.params.gameId, gameInfo)
            .then(() => history.push(`/games/${match.params.gameId}`))
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddInfoSubmitHandler}>

                    <InputField name="title" placeholder="Game Title" value={game?.title} onChangeHandler={onTitleChangeHandler} />
                    <InputField name="imageUrl" placeholder="Image Url" value={game?.imageUrl} onChangeHandler={onImageUrlChangeHandler} />

                    <Textarea name="intro" placeholder="Intro to the game" value={game?.intro} onChangeHandler={onIntroChangeHandler} />
                    <Textarea name="moreInfo" placeholder="More information" value={game?.moreInfo} onChangeHandler={onMoreInfoChangeHandler} />

                    <InputField name="videoUrl" placeholder="Video Url" value={game?.videoUrl} onChangeHandler={onVideoUrlChangeHandler} />

                    <div>
                        <div className="select-form-div">
                            <select onChange={onGenreChangeHandler} value={game?.genre}>
                                {genres?.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
                            </select>
                        </div>

                        <div className="select-form-div">
                            <select onChange={onDevChangeHandler} value={game?.dev}>
                                {devs?.map(x => <option key={x.id} value={x.id}>{x.orgName}</option>)}
                            </select>
                        </div>
                    </div>

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGameInfo