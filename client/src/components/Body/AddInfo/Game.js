import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from "react"
import { useRouteMatch, useHistory } from 'react-router-dom'

import gameService from '../../../services/gameService'
import errorHandler from '../../../utils/errorHandler'

const AddGameInfo = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [game, setGame] = useState(null)

    const [title, setTitle] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [intro, setIntro] = useState(null)
    const [moreInfo, setMoreInfo] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        gameService.getOne(match.params.gameId)
            .then(res => setGame(res))
            .then(() => {
                setTitle(game?.title)
                setImageUrl(game?.imageUrl)
                setIntro(game?.intro)
                setMoreInfo(game?.moreInfo)
                setVideoUrl(game?.videoUrl)
            })
            .catch(err => console.log(err))
    }, [match.params.gameId, game?.title, game?.imageUrl, game?.intro, game?.moreInfo, game?.videoUrl])



    const onTitleChangeHandler = (e) => setTitle(e.target.value)
    const onImageUrlChangeHandler = (e) => setImageUrl(e.target.value)
    const onIntroChangeHandler = (e) => setIntro(e.target.value)
    const onMoreInfoChangeHandler = (e) => setMoreInfo(e.target.value)
    const onVideoUrlChangeHandler = (e) => setVideoUrl(e.target.value)

    const onAddInfoSubmitHandler = (e) => {
        e.preventDefault()

        gameService.editOne(match.params.gameId, {
            title,
            imageUrl,
            intro,
            moreInfo,
            videoUrl
        })
            .then(() => history.push('/'))
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddInfoSubmitHandler}>

                    <input
                        className="input-field"
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={game?.title}
                        onChange={onTitleChangeHandler}
                    />
                    <input
                        className="input-field"
                        type="text"
                        name="imageUrl"
                        placeholder="Image Url"
                        defaultValue={game?.imageUrl}
                        onChange={onImageUrlChangeHandler}
                    />
                    <textarea
                        className="intro-textarea"
                        type="text"
                        name="intro"
                        placeholder="Intro to the game"
                        defaultValue={game?.intro}
                        onChange={onIntroChangeHandler}
                    ></textarea>
                    <textarea
                        className="intro-textarea"
                        type="text"
                        name="moreInfo"
                        placeholder="More information"
                        defaultValue={game?.moreInfo}
                        onChange={onMoreInfoChangeHandler}
                    ></textarea>
                    <input
                        className="input-field"
                        type="text"
                        name="videoUrl"
                        placeholder="Video Url"
                        defaultValue={game?.videoUrl}
                        onChange={onVideoUrlChangeHandler}
                    />
                    <h3>Genres</h3>
                    <h3>Developer</h3>

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGameInfo