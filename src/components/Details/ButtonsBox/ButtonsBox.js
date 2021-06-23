import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import errorHandler from '../../../utils/errorHandler'

import UserContext from '../../../contexts/UserContext'

import InfoBox from '../../InfoBox'



const ButtonsBox = ({ item, setItem, setDeleteAlert, setEditorsAlert, setEditAlert }) => {

    const type = useHistory().location.pathname.split('/')[1]

    const { userData } = useContext(UserContext)

    const [isCreator, setIsCreator] = useState(false)
    const [isEditor, setIsEditor] = useState(false)

    
    useEffect(() => {

        if (item.authorizedEditors && userData.user) {
            setIsCreator(userData.user.id === item.creator)
            let isAuthorized = isCreator ? true : item.authorizedEditors.includes(userData.user.id)
            for (let kvp of item.authorizedEditors) {
                if (kvp._id === userData.user.id) isAuthorized = true
            }
            setIsEditor(isAuthorized)
        }

    }, [item.authorizedEditors, isCreator, userData.user, item.creator])


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

    const handleDelete = () => {
        const isCreator = userData.user.id === item.creator ? true : false
        if (!isCreator) return toast.error(`You don't have permission to delete this ${type.slice(0, type.length - 1)}`)
        setDeleteAlert('show')
    }

    const handleEditors = () => {
        const isCreator = userData.user.id === item.creator ? true : false
        if (!isCreator) return toast.error('You don\'t have persmission to authorize editors.')
        setEditorsAlert('show')
    }

    const handleEdit = () => {
        const isAuthorized = userData.user.id === item.creator ? true : item.authorizedEditors.includes(userData.user.id)
        if (!isAuthorized) return toast.error(`You don't have permission to edit this ${type.slice(0, type.length - 1)}`)
        setEditAlert('show')
    }



    return (
        <InfoBox title="Functions">

            <button id="upvote" className="icon-btn" onClick={handleUpvote} disabled={isDisabled}>
                <i className="fas fa-arrow-alt-circle-up"></i>
            </button>

            {isCreator ?
                <button className="icon-btn" onClick={handleEditors}>
                    <i className="fas fa-plus-circle"></i>
                </button> : null}

            {isEditor ?
                <button className="icon-btn" onClick={handleEdit}>
                    <i className="fas fa-pen-square"></i>
                </button> : null}

            {isCreator ?
                <button className="icon-btn" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button> : null}

        </InfoBox >
    )
}

export default ButtonsBox