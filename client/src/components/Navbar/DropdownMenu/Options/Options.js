import './Options.css'

import Item from './Item/Item'

function Options() {
    return (
        <div className="dropdown-content">

            <h1 className="list-title">TODO: Users</h1>
            <ul className="list">
                <Item href="/profile">Profile Settings</Item>
                <Item href="/register">Register</Item>
                <Item href="/login">Login</Item>
                <Item href="/logout">Logout</Item>
            </ul>

            <h1 className="list-title">TODO: Functionality</h1>
            <ul className="list">
                <Item href="/followGames">Follow Games</Item>
                <Item href="/genres">Genres</Item>
                <Item href="/games">Games</Item>
                <Item href="/developers">Developers</Item>
            </ul>

            <h1 className="list-title">TODO: Misc</h1>
            <ul className="list">
                <Item href="#">Light Mode</Item>
            </ul>

        </div>
    )
}

export default Options