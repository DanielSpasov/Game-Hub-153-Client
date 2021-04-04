import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import genreService from '../../../services/genreService'
import validator from '../../../utils/validator'

import './Add.css'

const AddGenres = () => {

    const history = useHistory()

    const onAddGenreSubmitHandler = (e) => {
        e.preventDefault()

        let name = e.target.name.value
        let imageUrl = e.target.imageUrl.value

        validator({name, imageUrl})
        genreService.add({ name, imageUrl, upvotes: 0, usersUpvoted: [] })
        history.push('/genres')
    }

    return (
        <div className="main-section">

            <h1>Add Genre</h1>

            <div className="items-container">
                <form onSubmit={onAddGenreSubmitHandler}>

                    <input className="input-field" type="text" name="name" placeholder="Name" />
                    <input className="input-field" type="text" name="imageUrl" placeholder="Image Url" />

                    <button className="add-button">Add Genre</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGenres