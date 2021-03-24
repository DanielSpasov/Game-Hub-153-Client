import './Logo.css'

import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/">
                <img alt="Home" src="logo-white512.png" width="40px" height="40px" />
            </NavLink>
            <NavLink to="/">
                <img alt="Home" src="logo-purple512.png" width="40px" height="40px" className="img-top" />
            </NavLink>
        </div>
    )
}

export default Logo

