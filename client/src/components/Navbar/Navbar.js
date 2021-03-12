import './Navbar.css'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import SearchBox from './SearchBox/SearchBox'

function Navbar() {
    return (
        <nav className="navbar">

            <Logo />

            <Navigation />

            <SearchBox />

        </nav>
    )
}

export default Navbar