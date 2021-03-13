import './Navbar.css'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import SearchBox from './SearchBox/SearchBox'
import Profile from './Profile/Profile'
import DropdownMenu from './DropdownMenu/DropdownMenu'

function Navbar() {
    return (
        <nav className="navbar">

            <Logo />

            <Navigation />

            <SearchBox />

            <Profile />

            <DropdownMenu />

        </nav>
    )
}

export default Navbar