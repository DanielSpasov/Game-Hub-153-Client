import './Navbar.css'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Profile from './Profile/Profile'
import DropdownMenu from './DropdownMenu/DropdownMenu'

function Navbar() {
    return (
        <nav className="navbar">

            <Logo />
            <Navigation />
            <Profile />
            <DropdownMenu />

        </nav>
    )
}

export default Navbar