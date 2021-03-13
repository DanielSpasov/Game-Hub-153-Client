import './Options.css'

import Item from './Item/Item'

function Options() {
    return (
        <div className="dropdown-content">

            <h1>General</h1>
            <ul>
                <Item href="#/profile">Profile Settings</Item>
                <Item href="#/darkmode">Dark Mode</Item>
                <Item href="#/logout">Logout</Item>
            </ul>
            
        </div>
    )
}

export default Options