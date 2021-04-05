import { toast, ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import genreService from '../../../services/genreService'

import errorHandler from '../../../utils/errorHandler'
import validator from '../../../utils/validator'

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
            .then(() => {
                toast.success('Genre edited. Redirecting to genres page.')
                setTimeout(() => history.push('/genres'), 2500)
            })
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddGenreInfoSubmitHandler}>

                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue={genre?.name}
                        onChange={onNameChangeHandler}
                    />
                    <input
                        className="input-field"
                        type="text"
                        name="imageUrl"
                        placeholder="Image Url"
                        defaultValue={genre?.imageUrl}
                        onChange={onImageUrlChangeHandler}
                    />

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGenreInfo