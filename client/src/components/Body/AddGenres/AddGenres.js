import { ToastContainer, toast } from 'react-toastify'

import genreService from '../../../services/genreService'

import './AddGenres.css'

const AddGenres = ({
    history
}) => {

    const onGenreSubmitHandler = (e) => {
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
        <div className="genres-section">

            <div className="genres-nav-container" >
                <h1>Add Genre</h1>
            </div>

            <div className="genres-container">
                <form onSubmit={onGenreSubmitHandler}>

                    <input className="add-genre-field" type="text" name="name" placeholder="Name" />
                    <input className="add-genre-field" type="text" name="imageUrl" placeholder="Image Url" />

                    <br></br>

                    <button className="add-genre-button">Add Genre</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGenres