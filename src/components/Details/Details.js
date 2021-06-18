import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouteMatch, useHistory } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import AlertBox from '../AlertBox'

import ImageBox from './ImageBox'
import ButtonsBox from './ButtonsBox'
import DesciprtionBox from './DescriptionBox'
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

    const match = useRouteMatch()
    const history = useHistory()
    const type = useHistory().location.pathname.split('/')[1]

    const { userData } = useContext(UserContext)

    const [item, setItem] = useState({})
    const isCreator = userData.user ? userData.user.id === item.creator : false

    useEffect(() => {
        let componentMounted = true

        const fetchData = async () => {
            let item
            if (type === 'games') item = await gameService.getOne(match.params.itemID)
            if (type === 'genres') item = await genreService.getOne(match.params.itemID)
            if (type === 'devs') item = await devService.getOne(match.params.itemID)
            if (componentMounted) setItem(item)
        }
        fetchData()

        return () => { componentMounted = false }
    }, [match.params.itemID, type])

    const handleEdit = () => {
        const isAuthorized = isCreator ? true : item.authorizedEditors.includes(userData.user.id)
        if (!isAuthorized) return toast.error(`You don't have permission to edit this ${type.slice(0, type.length - 1)}`)
        history.push(`/${type}/${match.params.itemID}/edit`)
    }

    const handleUpvote = async () => {
        try {

            if (item.usersUpvoted.includes(userData.user.id)) toast.info('Upvote removed.')
            if (!item.usersUpvoted.includes(userData.user.id)) {
                if (item.title === 'League of Legends') toast.warn(`Yikes...`)
                if (item.title !== 'League of Legends') toast.success(`${item.title} upvoted.`)
            }

            if (type === 'games') setItem(await gameService.upvote(item, userData.user.id))
            if (type === 'genres') setItem(await genreService.upvote(item, userData.user.id))
            if (type === 'devs') setItem(await devService.upvote(item, userData.user.id))

        } catch (err) { errorHandler(err) }
    }

    const [alertBox, setAlertBox] = useState('hide')
    const handleDelete = () => {
        if (!isCreator) return toast.error(`You don't have permission to delete this ${type.slice(0, type.length - 1)}`)
        setAlertBox('show')
    }

    const handleDeleteYes = async () => {
        try {
            if (type === 'games') gameService.deleteGame(match.params.itemID, userData.user.id)
            if (type === 'genres') genreService.deleteGenre(match.params.itemID, userData.user.id)
            if (type === 'devs') devService.deleteDev(match.params.itemID, userData.user.id)
            history.push(`/${type}`)
        } catch (err) { errorHandler(err) }
    }

    const handleDeleteNo = () => { setAlertBox('hide') }

    const handleComment = async (e) => {
        e.preventDefault()
        try {
            let content = e.target.content.value
            if (type === 'games') gameService.comment(match.params.itemID, content, userData.user.username)
            if (type === 'genres') genreService.comment(match.params.itemID, content, userData.user.username)
            if (type === 'devs') devService.comment(match.params.itemID, content, userData.user.username)
            e.target.content.value = ''
            toast.success(`Your comment on ${item.title} was sent.`)
        } catch (err) { errorHandler(err) }
    }

    return (
        <section>

            <header>
                <h1>{item.title}</h1>
            </header>

            <article>

                <AlertBox display={alertBox} yesHandler={handleDeleteYes} noHandler={handleDeleteNo}>
                    <p>{`Are you sure you want to delete this ${type.slice(0, type.length - 1)}?`}</p>
                </AlertBox>

                <ImageBox image={item.image} title={item.title} />
                <ButtonsBox
                    isCreator={isCreator}
                    editors={item.authorizedEditors}
                    handleEdit={handleEdit}
                    handleUpvote={handleUpvote}
                    handleDelete={handleDelete}
                />
                <DesciprtionBox description={item.description} />
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