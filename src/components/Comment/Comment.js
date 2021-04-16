import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import UserContext from '../../contexts/UserContext'

import Textarea from '../Common/Textarea/Textarea'

import errorHandler from '../../utils/errorHandler'

import './Comment.css'

const Comment = () => {

    const location = useLocation().pathname.split('/')[1]
    const match = useRouteMatch()
    const history = useHistory()

    const { email } = useContext(UserContext)

    const addCommentHandler = (e) => {
        e.preventDefault()

        let commentContent = e.target.content.value

        // if(location === 'games') gameService.comment(commentContent, email, match.params.gameId)
        // if(location === 'genres') genreService.comment(commentContent, email, match.params.genreId)
        if (location === 'devs') {
            devService.comment(commentContent, email, match.params.devId)
                .then(() => history.push(`/devs/${match.params.devId}`))
                .catch(errorHandler)
        }
    }

    return (
        <div className="main-section">

            <h1>Add Comment</h1>

            <div className="items-container">
                <form onSubmit={addCommentHandler}>

                    <Textarea name="content" placeholder="Content" />

                    <button className="add-button">Add Comment</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Comment