import './Navbar.css'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import UserNavigation from './UserNavigation/UserNavigation'
import Profile from './Profile/Profile'
import DropdownMenu from './DropdownMenu/DropdownMenu'

const Navbar = ({ isAuth }) => {
    console.log('In Navbar: ', isAuth)

    let userNav = isAuth ? null : <UserNavigation />
    let dropdown = isAuth ? <DropdownMenu /> : null
    let profile = isAuth ? <Profile /> : null

    return (
        <nav className="navbar">

            <Logo />
            <Navigation isAuth={isAuth} />
            {profile}
            {dropdown}
            {userNav}

        </nav>
    )
}

export default Navbar