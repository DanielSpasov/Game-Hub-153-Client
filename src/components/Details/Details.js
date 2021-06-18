import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouteMatch, useHistory } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import AlertBox from '../AlertBox'
import InfoBox from '../InfoBox'

import ButtonsBox from './ButtonsBox'
import VideoBox from './VideoBox'
import MoreInfoBox from './MoreInfoBox'
import GameGenreBox from './GameGenreBox'
import GameDevBox from './GameDevBox'
import GamesInGenreBox from './GamesInGenreBox'
import GamesByDevBox from './GamesByDevBox'
import AddCommentBox from './AddCommentBox'
import CommentsBox from './CommentsBox'

import './Details.css'



const Details = () => {

    const { itemID } = useRouteMatch().params
    const history = useHistory()
    const type = useHistory().location.pathname.split('/')[1]

    const { userData } = useContext(UserContext)

    const [item, setItem] = useState({})
    const isCreator = userData.user ? userData.user.id === item.creator : false

    useEffect(() => {
        let componentMounted = true

        const fetchData = async () => {
            let item
            if (type === 'games') item = await gameService.getOne(itemID)
            if (type === 'genres') item = await genreService.getOne(itemID)
            if (type === 'devs') item = await devService.getOne(itemID)
            if (componentMounted) setItem(item)
        }
        fetchData()

        return () => { componentMounted = false }
    }, [itemID, type])

    const handleEdit = () => {
        const isAuthorized = isCreator ? true : item.authorizedEditors.includes(userData.user.id)
        if (!isAuthorized) return toast.error(`You don't have permission to edit this ${type.slice(0, type.length - 1)}`)
        history.push(`/${type}/${itemID}/edit`)
    }

    const handleUpvote = async () => {
        try {

            if (item.usersUpvoted.includes(userData.user.id)) toast.info('Upvote removed.')
            if (!item.usersUpvoted.includes(userData.user.id)) {
                if (item.title === 'League of Legends') toast.warn(`Yikes...`)
                if (item.title !== 'League of Legends') toast.success(`You upvoted ${item.title}.`)
            }

            if (type === 'games') setItem(await gameService.upvote(item._id, userData.user.id))
            if (type === 'genres') setItem(await genreService.upvote(item, userData.user.id))
            if (type === 'devs') setItem(await devService.upvote(item, userData.user.id))

        } catch (err) { errorHandler(err) }
    }

    const handleComment = async (e) => {
        e.preventDefault()
        try {
            let content = e.target.content.value
            if (type === 'games') gameService.comment(itemID, content, userData.user.username)
            if (type === 'genres') genreService.comment(itemID, content, userData.user.username)
            if (type === 'devs') devService.comment(itemID, content, userData.user.username)
            e.target.content.value = ''
            toast.success(`Your comment on ${item.title} was sent.`)
        } catch (err) { errorHandler(err) }
    }

    const [alertBox, setAlertBox] = useState('hide')
    const handleDelete = () => {
        if (!isCreator) return toast.error(`You don't have permission to delete this ${type.slice(0, type.length - 1)}`)
        setAlertBox('show')
    }

    const handleDeleteYes = async () => {
        try {
            if (type === 'games') gameService.deleteGame(itemID, userData.user.id)
            if (type === 'genres') genreService.deleteGenre(itemID, userData.user.id)
            if (type === 'devs') devService.deleteDev(itemID, userData.user.id)
            history.push(`/${type}`)
        } catch (err) { errorHandler(err) }
    }

    const handleDeleteNo = () => { setAlertBox('hide') }

    return (
        <section>

            <header>
                <h1>{item.title}</h1>
            </header>

            <article>

                <div>
                    <img className="blockbuster-image" src={item.image} alt={item.title} />
                </div>

                <AlertBox display={alertBox} yesHandler={handleDeleteYes} noHandler={handleDeleteNo}>
                    <p>{`Are you sure you want to delete this ${type.slice(0, type.length - 1)}?`}</p>
                </AlertBox>

                <ButtonsBox
                    isCreator={isCreator}
                    editors={item.authorizedEditors}
                    handleEdit={handleEdit}
                    handleUpvote={handleUpvote}
                    handleDelete={handleDelete}
                />

                <InfoBox title="Description">
                    <p>{item.description}</p>
                </InfoBox>

                <VideoBox videoUrl={item.videoUrl} />
                <MoreInfoBox moreInfo={item.moreInfo} />
                <GameGenreBox genre={item.genre} type={type} />
                <GameDevBox dev={item.dev} type={type} />

                <GamesByDevBox games={item.gamesByDev} type={type} />

                <GamesInGenreBox games={item.gamesInGenre} type={type} />

                <AddCommentBox handleComment={handleComment} />
                <CommentsBox comments={item.comments} type={type} />

            </article>

            <ToastContainer />
        </section >
    )
}

export default Details