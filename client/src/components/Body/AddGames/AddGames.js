import { ToastContainer, toast } from 'react-toastify'

import gameService from '../../../services/gameService'

import './AddGames.css'

const AddGames = ({
    history
}) => {

    const onAddGameSubmitHandler = (e) => {
        e.preventDefault()

        let title = e.target.title.value
        let imageUrl = e.target.imageUrl.value
        let intro = e.target.intro.value

        let imageUrlIsHttp = imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = imageUrl.slice(0, 8) === 'https://'

        if (!title) return toast.error('Title is required.')
        if (title > 25) return toast.error('Title cannot be more than 25 symbols.')
        if (!imageUrl) return toast.error('Iamge address is required.')
        if (!imageUrlIsHttp && !imageUrlIsHttps) return toast.error('Invalid image address.')
        if (!intro) return toast.error('Intro is required.')

        gameService.add({ title, imageUrl, intro, upvotes: 0, usersUpvoted: [] })
        history.push('/games')
    }

    return (
        <div className="main-section">

            <h1>Add Game</h1>

            <div className="items-container">
                <form onSubmit={onAddGameSubmitHandler}>

                    <input className="add-game-field" type="text" name="title" placeholder="Title" />
                    <input className="add-game-field" type="text" name="imageUrl" placeholder="Image Url" />
                    <textarea className="intro-textarea" type="text" name="intro" placeholder="Intro to the game"></textarea>

                    <button className="add-game-button">Add Game</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGames