import './UserNavigation.css'

import Item from './Item/Item'

const Navigation = () => {
    return (
        <div className="user-navigation">
            <Item href="/user/login" text="Login" id="login" />
            <Item href="/user/register" text="Register" id="register" />
        </div>
    )
}

export default Navigation