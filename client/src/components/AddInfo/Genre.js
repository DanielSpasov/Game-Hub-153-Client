import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import genreService from '../../services/genreService'

import InputField from '../Common/InputField/InputField'

import errorHandler from '../../utils/errorHandler'
import validator from '../../utils/validator'

import './AddInfo.css'

const AddGenreInfo = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [genre, setGenre] = useState(null)

    const [name, setName] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        genreService.getOne(match.params.genreId)
            .then(res => setGenre(res))
            .then(() => {
                setName(genre?.name)
                setImageUrl(genre?.imageUrl)
            })
            .catch(errorHandler)
    }, [match.params.genreId, genre?.name, genre?.imageUrl])

    const onNameChangeHandler = (e) => setName(e.target.value)
    const onImageUrlChangeHandler = (e) => setImageUrl(e.target.value)

    const onAddGenreInfoSubmitHandler = (e) => {
        e.preventDefault()

        validator({ name, imageUrl })
        genreService.editOne(match.params.genreId, { name, imageUrl })
            .then(() => history.push(`/genres/${match.params.genreId}`))
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddGenreInfoSubmitHandler}>

                    <InputField name="name" placeholder="Genre Name" value={genre?.name} onChangeHandler={onNameChangeHandler} />
                    <InputField name="imageUrl" placeholder="Image Url" value={genre?.imageUrl} onChangeHandler={onImageUrlChangeHandler} />

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGenreInfo