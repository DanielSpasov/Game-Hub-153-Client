import { NavLink } from 'react-router-dom'

import './Profile.css'


function Profile() {
    return (
        <div className="profile-pic">
            <NavLink to="/profile">
                <img alt="Home" src="user.jpg" width="40px" height="40px" />
            </NavLink>
        </div>
    )
}

export default Profile