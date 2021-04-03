import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import genreService from '../../../services/genreService'

import './Add.css'

const AddGenres = () => {

    const history = useHistory()

    const onAddGenreSubmitHandler = (e) => {
        e.preventDefault()

        let name = e.target.name.value
        let imageUrl = e.target.imageUrl.value

        let imageUrlIsHttp = imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = imageUrl.slice(0, 8) === 'https://'

        if (!name) return toast.error('Name is required.')
        if (name > 25) return toast.error('Name cannot be more than 25 symbols.')
        if (!imageUrl) return toast.error('Iamge address is required.')
        if (!imageUrlIsHttp && !imageUrlIsHttps) return toast.error('Invalid image address.')

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