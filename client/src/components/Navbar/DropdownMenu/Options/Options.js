import './Options.css'

import Item from './Item/Item'

function Options() {
    return (
        <div className="dropdown-content">

            <h1>TODO: User</h1>
            <ul>
                <Item href="#/">Profile Settings</Item>
                <Item href="#/">Register</Item>
                <Item href="#/">Login</Item>
                <Item href="#/">Logout</Item>
            </ul>

            <h1>TODO: Functionality</h1>
            <ul>
                <Item href="#/">Follow Games</Item>
                <Item href="#/">Genres</Item>
                <Item href="#/">Games</Item>
                <Item href="#/">Developers</Item>
            </ul>

            <h1>TODO: Misc</h1>
            <ul>
                <Item href="#/">Light Mode</Item>
            </ul>

        </div>
    )
}

export default Options