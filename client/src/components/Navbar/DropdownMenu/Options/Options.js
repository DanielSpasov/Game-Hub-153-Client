import './Options.css'

import Item from './Item/Item'

const Options = () => {
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
                <Item href="/logout">Logout</Item>
            </ul>

        </div>
    )
}

export default Options