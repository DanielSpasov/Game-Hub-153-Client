import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouteMatch, useHistory } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import InfoBox from '../InfoBox'

import DeleteAlert from './DeleteAlert'
import EditAlert from './EditAlert'
import EditorsAlert from './EditorsAlert'

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
    const type = useHistory().location.pathname.split('/')[1]

    const { userData } = useContext(UserContext)

    const [item, setItem] = useState({})

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

    const [isDisabled, setIsDisabled] = useState(false)
    const handleUpvote = async () => {
        try {

            if (!isDisabled) {
                setIsDisabled(true)
                setTimeout(() => setIsDisabled(false), 5000)
            }

            if (item.usersUpvoted.includes(userData.user.id)) toast.info('Upvote removed.')
            if (!item.usersUpvoted.includes(userData.user.id)) {
                if (item.title === 'League of Legends') toast.warn(`Yikes`)
                if (item.title !== 'League of Legends') toast.success(`You upvoted ${item.title}.`)
            }

            if (type === 'games') setItem(await gameService.upvote(item._id, userData.user.id))
            if (type === 'genres') setItem(await genreService.upvote(item._id, userData.user.id))
            if (type === 'devs') setItem(await devService.upvote(item._id, userData.user.id))

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

    const [deleteAlert, setDeleteAlert] = useState('hide')
    const handleDelete = () => {
        const isCreator = userData.user.id === item.creator ? true : false
        if (!isCreator) return toast.error(`You don't have permission to delete this ${type.slice(0, type.length - 1)}`)
        setDeleteAlert('show')
    }

    const [editAlert, setEditAlert] = useState('hide')
    const handleEdit = () => {
        const isAuthorized = userData.user.id === item.creator ? true : item.authorizedEditors.includes(userData.user.id)
        if (!isAuthorized) return toast.error(`You don't have permission to edit this ${type.slice(0, type.length - 1)}`)
        setEditAlert('show')
    }

    const [authAlert, setAuthAlert] = useState('hide')
    const handleEditors = () => {
        const isCreator = userData.user.id === item.creator ? true : false
        if (!isCreator) return toast.error('You don\'t have persmission to authorize editors.')
        setAuthAlert('show')
    }

    return (
        <section>

            <header>
                <h1>{item.title}</h1>
            </header>

            <article>

                <div>
                    <img className="blockbuster-image" src={item.image} alt={item.title} />
                </div>

                <DeleteAlert deleteAlert={deleteAlert} setDeleteAlert={setDeleteAlert} />
                <EditAlert editAlert={editAlert} setEditAlert={setEditAlert} />
                <EditorsAlert authAlert={authAlert} setAuthAlert={setAuthAlert} item={item} setItem={setItem} />

                <ButtonsBox
                    editors={item.authorizedEditors}
                    itemCreator={item.creator}
                    isDisabled={isDisabled}
                    handleUpvote={handleUpvote}
                    handleEditors={handleEditors}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

                <InfoBox title="Description"><p>{item.description}</p></InfoBox>

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