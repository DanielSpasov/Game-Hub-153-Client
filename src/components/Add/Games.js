import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import InputField from '../Common/InputField/InputField'

import errorHandler from '../../utils/errorHandler'
import validator from '../../utils/validator'

import './Add.css'

const AddGames = () => {

    const history = useHistory()

    const [genres, setGenres] = useState()
    const [devs, setDevs] = useState()

    useEffect(() => {
        genreService.getAll().then(res => setGenres(res)).catch(errorHandler)
        devService.getAll().then(res => setDevs(res)).catch(errorHandler)
    }, [])

    const onAddGameSubmitHandler = (e) => {
        e.preventDefault()

        let title = e.target.title.value
        let imageUrl = e.target.imageUrl.value
        let intro = e.target.intro.value
        let genre = e.target.genre.value
        let dev = e.target.dev.value

        validator({ title, imageUrl })
        gameService.add({
            title,
            imageUrl,
            intro,
            moreInfo: '',
            videoUrl: '',
            genre,
            dev,
            upvotes: 0,
            usersUpvoted: [],
            comments: [],
        })
        history.push('/games')
    }

    return (
        <div className="main-section">

            <h1>Add Game</h1>

            <div className="items-container">
                <form onSubmit={onAddGameSubmitHandler}>

                    <InputField name="title" placeholder="Game Title" />
                    <InputField name="imageUrl" placeholder="Image Url" />

                    <textarea className="textarea" type="text" name="intro" placeholder="Intro to the game"></textarea>

                    <div>
                        <div className="select-form-div">
                            <select name="genre">
                                {genres?.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
                            </select>
                        </div>

                        <div className="select-form-div">
                            <select name="dev">
                                {devs?.map(x => <option key={x.id} value={x.id}>{x.orgName}</option>)}
                            </select>
                        </div>
                    </div>

                    <button className="add-button">Add Game</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGames