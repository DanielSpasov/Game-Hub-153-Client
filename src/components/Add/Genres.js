import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import genreService from '../../services/genreService'
import validator from '../../utils/validator'

import InputField from '../Common/InputField/InputField'

import './Add.css'

const AddGenres = () => {

    const history = useHistory()

    const onAddGenreSubmitHandler = (e) => {
        e.preventDefault()

        let name = e.target.name.value
        let imageUrl = e.target.imageUrl.value

        validator({ name, imageUrl })
        genreService.add({ name, imageUrl, upvotes: 0, usersUpvoted: [], comments: [] })
        history.push('/genres')
    }

    return (
        <div className="main-section">

            <h1>Add Genre</h1>

            <div className="items-container">
                <form onSubmit={onAddGenreSubmitHandler}>

                    <InputField name="name" placeholder="Genre Name" />
                    <InputField name="imageUrl" placeholder="Image Url" />

                    <button className="add-button">Add Genre</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGenres