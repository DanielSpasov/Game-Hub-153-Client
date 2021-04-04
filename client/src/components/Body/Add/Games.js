import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import gameService from '../../../services/gameService'

import './Add.css'
import validator from '../../../utils/validator'

const AddGames = () => {

    const history = useHistory()

    const onAddGameSubmitHandler = (e) => {
        e.preventDefault()

        let title = e.target.title.value
        let imageUrl = e.target.imageUrl.value
        let intro = e.target.intro.value

        validator({ title, imageUrl })
        gameService.add({
            title,
            imageUrl,
            intro,
            moreInfo: '',
            videoUrl: '',
            upvotes: 0,
            usersUpvoted: []
        })
        history.push('/games')
    }

    return (
        <div className="main-section">

            <h1>Add Game</h1>

            <div className="items-container">
                <form onSubmit={onAddGameSubmitHandler}>

                    <input className="input-field" type="text" name="title" placeholder="Title" />
                    <input className="input-field" type="text" name="imageUrl" placeholder="Image Url" />
                    <textarea className="intro-textarea" type="text" name="intro" placeholder="Intro to the game"></textarea>

                    <button className="add-button">Add Game</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddGames