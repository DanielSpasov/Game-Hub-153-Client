import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = ({
    email,
    isAuth
}) => {
    let loggedInLinks = isAuth ?
        <>
            <NavLink id="addGames" activeStyle={{ 'color': '#a970ff' }} to="/add/games">Add Games</NavLink>
            <NavLink id="addGenres" activeStyle={{ 'color': '#a970ff' }} to="/add/genres">Add Genres</NavLink>
            <NavLink id="addDevs" activeStyle={{ 'color': '#a970ff' }} to="/add/devs">Add Devs</NavLink>
        </> : null

    let authLinks = isAuth ?
        <>
            <NavLink id="logout" activeStyle={{ 'color': '#a970ff' }} to="/user/logout">Logout</NavLink>
            <span>Welcome, {email}</span>
        </> :
        <>
            <NavLink id="login" activeStyle={{ 'color': '#a970ff' }} to="/user/login">Login</NavLink>
            <NavLink id="register" activeStyle={{ 'color': '#a970ff' }} to="/user/register">Register</NavLink>
        </>


    return (
        <nav className="navbar">

            <div className="logo">
                <NavLink to="/">
                    <img alt="Home" src="/logo-white512.png" width="40px" height="40px" />
                </NavLink>
                <NavLink to="/">
                    <img alt="Home" src="/logo-purple512.png" width="40px" height="40px" className="img-top" />
                </NavLink>
            </div>

            <div className="navigation">
                <NavLink id="games" activeStyle={{ 'color': '#a970ff' }} to="/games">Games</NavLink>
                <NavLink id="genres" activeStyle={{ 'color': '#a970ff' }} to="/genres">Genres</NavLink>
                <NavLink id="devs" activeStyle={{ 'color': '#a970ff' }} to="/devs">Devs</NavLink>
                {loggedInLinks}
            </div>

            <div className="user-navigation">
                {authLinks}
            </div>

        </nav>
    )
}

export default Navbar