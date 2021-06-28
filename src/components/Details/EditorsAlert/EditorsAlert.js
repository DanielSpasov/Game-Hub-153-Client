import { toast } from 'react-toastify'
import { useContext } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import UserContext from '../../../contexts/UserContext'

import errorHandler from '../../../utils/errorHandler'

import AlertBox from '../../AlertBox'



const EditorsAlert = ({ item, setItem, editorsAlert, setEditorsAlert }) => {

    const { userData } = useContext(UserContext)

    const { itemID } = useRouteMatch().params
    const type = useHistory().location.pathname.split('/')[1]

    const handleEditorsYes = async (e) => {
        e.preventDefault()
        try {
            let userEmail = e.target.parentElement.parentElement.children[1].children[0].children[0].value
            e.target.parentElement.parentElement.children[1].children[0].children[0].value = ''
            let res
            if (type === 'games') res = await gameService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (type === 'genres') res = await genreService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (type === 'devs') res = await devService.authorizeEditor(userData.user.id, userEmail, itemID)
            if (res) {
                toast.info(`${userEmail} is now editor.`)
                userEmail = ''
                setItem(res)
            }
        } catch (err) { errorHandler(err) }
    }

    const handleEditorsNo = () => { setEditorsAlert('hide') }

    const removeEditor = async (e) => {
        try {
            let res
            if (type === 'games') res = await gameService.removeEditor(userData.user.id, e.target.id, itemID)
            if (type === 'genres') res = await genreService.removeEditor(userData.user.id, e.target.id, itemID)
            if (type === 'devs') res = await devService.removeEditor(userData.user.id, e.target.id, itemID)
            if (res) {
                toast.info(`${e.target.parentElement.children[0].innerHTML} removed from the editors list`)
                setItem(res)
            }
        } catch (err) { errorHandler(err) }
    }

    return (
        <AlertBox display={editorsAlert} yesHandler={handleEditorsYes} noHandler={handleEditorsNo} type="auth">
            <form>
                <input type="email" name="email" placeholder="User email" />
            </form>
            <div>
                {item.authorizedEditors ? item.authorizedEditors.map(x =>
                    <div key={x.email} className="authorized-editor">
                        <p>{x.email}</p>
                        <i id={x._id} className="fas fa-user-times" onClick={removeEditor}></i>
                    </div>
                ) : null}
            </div>
        </AlertBox>
    )
}



export default EditorsAlert