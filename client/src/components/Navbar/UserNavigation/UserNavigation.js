import './UserNavigation.css'

import Item from './Item/Item'

function Navigation() {
    return (
        <div className="user-navigation">
            <Item href="/login" text="Login" id="login" />
            <Item href="/register" text="Register" id="register" />
        </div>
    )
}

export default Navigation