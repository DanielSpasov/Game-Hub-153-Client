import './Options.css'

import Item from './Item/Item'

function Options() {
    return (
        <div className="dropdown-content">

            <h1>TODO:</h1>
            <ul>
                <Item href="#/">Profile Settings</Item>
                <Item href="#/">Light Mode</Item>
                <Item href="#/">Logout</Item>
                <Item href="#/">Login</Item>
                <Item href="#/">Register</Item>
                <Item href="#/">Categories</Item>
                <Item href="#/">Add Game Page</Item>
                <Item href="#/">Add Category Page</Item>
            </ul>
            
        </div>
    )
}

export default Options