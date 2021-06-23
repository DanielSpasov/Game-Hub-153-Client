import { useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import UserContext from '../../../contexts/UserContext'

import errorHandler from '../../../utils/errorHandler'

import AlertBox from '../../AlertBox'



const DeleteAlert = ({ deleteAlert, setDeleteAlert }) => {

    const { userData } = useContext(UserContext)

    const { itemID } = useRouteMatch().params
    const history = useHistory()
    const type = history.location.pathname.split('/')[1]

    const handleDeleteYes = async () => {
        try {
            if (type === 'games') gameService.deleteGame(itemID, userData.user.id)
            if (type === 'genres') genreService.deleteGenre(itemID, userData.user.id)
            if (type === 'devs') devService.deleteDev(itemID, userData.user.id)
            history.push(`/${type}`)
        } catch (err) { errorHandler(err) }
    }

    const handleDeleteNo = () => { setDeleteAlert('hide') }

    return (
        <AlertBox display={deleteAlert} yesHandler={handleDeleteYes} noHandler={handleDeleteNo} type="delete">
            <p>{`Are you sure you want to delete this ${type.slice(0, type.length - 1)}?`}</p>
        </AlertBox>
    )
}



export default DeleteAlert