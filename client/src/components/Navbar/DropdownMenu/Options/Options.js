import Item from './Item/Item'
import { useHistory } from 'react-router-dom'

import './Options.css'


const Options = () => {

    const history = useHistory()

    const logout = () => {
        document.cookie = `x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        history.push('/')
    }

    return (
        <div className="dropdown-content">

            <h1 className="list-title">Look at:</h1>
            <ul className="list">
                <Item href="/games">Games</Item>
                <Item href="/genres">Genres</Item>
                <Item href="/devs">Devs</Item>
            </ul>

            <h1 className="list-title">Add:</h1>
            <ul className="list">
                <Item href="/games/add">Add Games</Item>
                <Item href="/genres/add">Add Genres</Item>
                <Item href="/devs/add">Add Devs</Item>
            </ul>

            <h1 className="list-title">User Settings:</h1>
            <ul className="list">
                <Item href="/profile">Profile</Item>
                <button className="logoutBtn" onClick={logout}>Logout</button>
            </ul>

        </div>
    )
}

export default Options