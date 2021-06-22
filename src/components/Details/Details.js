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
            if (!item.usersUpvoted.includes(userData.user.id)) toast.success(`You upvoted ${item.title}.`)

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
        if (userData.user.id !== item.creator) return toast.error(`You don't have permission to delete this ${type.slice(0, type.length - 1)}`)
        setDeleteAlert('show')
    }

    const [editAlert, setEditAlert] = useState('hide')
    const handleEdit = () => {
        const isAuthorized = userData.user.id === item.creator ? true : item.authorizedEditors.includes(userData.user.id)
        if (!isAuthorized) return toast.error(`You don't have permission to edit this ${type.slice(0, type.length - 1)}`)
        setEditAlert('show')
    }

    const [authAlert, setAuthAlert] = useState('hide')
    const handleAddEditor = (e) => {
        const isCreator = userData.user.id === item.creator ? true : false
        if (!isCreator) toast.error('You don\'t have persmission to authorize editors.')
        setAuthAlert('show')
    }

    const removeEditor = async (e) => {
        try {
            e.target.parentElement.style = 'display: none'
            let res
            if (type === 'games') res = await gameService.removeEditor(userData.user.id, e.target.id, itemID)
            if (type === 'genres') res = await genreService.removeEditor(userData.user.id, e.target.id, itemID)
            if (type === 'devs') res = await devService.removeEditor(userData.user.id, e.target.id, itemID)
            if(res) toast.info(`${e.target.parentElement.children[0].innerHTML} removed from the editors list`)
        } catch (err) { errorHandler(err) }
    }

    const handleDeleteYes = async () => {
        try {
            if (type === 'games') gameService.deleteGame(itemID, userData.user.id)
            if (type === 'genres') genreService.deleteGenre(itemID, userData.user.id)
            if (type === 'devs') devService.deleteDev(itemID, userData.user.id)
            history.push(`/${type}`)
        } catch (err) { errorHandler(err) }
    }

    const handleEditYes = async () => {
        try {
        } catch (err) { errorHandler(err) }
    }

    const handleAuthEditYes = async (e) => {
        e.preventDefault()
        try {
            let userEmail = e.target.parentElement.parentElement.children[1].children[0].children[0].value
            e.target.parentElement.parentElement.children[1].children[0].children[0].value = ''
            let res
            if (type === 'games') res = await gameService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (type === 'genres') res = await genreService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (type === 'devs') res = await devService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (res) toast.info(`${userEmail} is now editor.`)
            setAuthAlert('hide')
        } catch (err) { errorHandler(err) }
    }

    const handleDeleteNo = () => { setDeleteAlert('hide') }
    const handleEditNo = () => { setEditAlert('hide') }
    const handleAuthEditNo = () => { setAuthAlert('hide') }

    return (
        <section>

            <header>
                <h1>{item.title}</h1>
            </header>

            <article>

                <div>
                    <img className="blockbuster-image" src={item.image} alt={item.title} />
                </div>

                <AlertBox display={deleteAlert} yesHandler={handleDeleteYes} noHandler={handleDeleteNo} type="delete">
                    <p>{`Are you sure you want to delete this ${type.slice(0, type.length - 1)}?`}</p>
                </AlertBox>

                <AlertBox display={editAlert} yesHandler={handleEditYes} noHandler={handleEditNo} type="edit" title={item.title}>
                    <p>This is the edit alert</p>
                </AlertBox>

                <AlertBox display={authAlert} yesHandler={handleAuthEditYes} noHandler={handleAuthEditNo} type="auth">
                    <form>
                        <input type="email" name="email" placeholder="User email" />
                    </form>
                    <div>
                        {item.authorizedEditors ? item.authorizedEditors.map(x =>
                            <div key={x._id} className="authorized-editor">
                                <p>{x.email}</p>
                                <i id={x._id} className="fas fa-user-times" onClick={removeEditor}></i>
                            </div>
                        ) : null}
                    </div>
                </AlertBox>

                <ButtonsBox
                    editors={item.authorizedEditors}
                    itemCreator={item.creator}
                    isDisabled={isDisabled}
                    handleUpvote={handleUpvote}
                    handleAddEditor={handleAddEditor}
                    handleEdit={handleEdit}
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