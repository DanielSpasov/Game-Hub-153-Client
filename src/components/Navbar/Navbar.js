import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

import './Navbar.css'



const Navbar = () => {

    const { userData } = useContext(UserContext)
    const isAuth = Boolean(userData.user)

    return (
        <nav>

            <section className="left-navigation">
                <ul className="left-list">
                    <li><NavLink to="/"><i className="fas fa-home"></i></NavLink></li>
                    <li id="games-text"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/games">Games</NavLink></li>
                    <li id="games-icon"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/games"><i className="fas fa-hat-wizard"></i></NavLink></li>
                    <li id="genres-text"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/genres">Genres</NavLink></li>
                    <li id="genres-icon"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/genres"><i className="fas fa-book"></i></NavLink></li>
                    <li id="devs-text"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/devs">Devs</NavLink></li>
                    <li id="devs-icon"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/devs"><i className="fas fa-laptop-code"></i></NavLink></li>

                    <div id="dropdown">
                        <li className="dropdown-btn">
                            <NavLink activeStyle={{ 'color': '#a970ff' }} to="#"><i className="fas fa-caret-square-down"></i></NavLink>
                        </li>
                        <div className="dropdown-content">
                            <p>Link 1</p>
                            <p>Link 2</p>
                            <p>Link 3</p>
                        </div>
                    </div>

                    {
                        isAuth ?
                            <>
                                <li id="add-games"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/add/game">Add game</NavLink></li>
                                <li id="add-genres"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/add/genre">Add genre</NavLink></li>
                                <li id="add-devs"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/add/dev">Add dev</NavLink></li>
                                <li id="left-profile"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/profile"><i className="fas fa-user"></i></NavLink></li>
                            </> : null
                    }
                </ul>
            </section>

            <section className="right-navigation">
                <ul className="right-list">
                    {
                        isAuth ?
                            <>
                                <span>Welcome, {userData.user.username}</span>
                                <li id="logout"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/user/logout">Logout</NavLink></li>
                                <li id="right-profile"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/profile"><i className="fas fa-user"></i></NavLink></li>
                            </> :
                            <>
                                <li id="login"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/user/login">Login</NavLink></li>
                                <li id="register"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/user/register">Register</NavLink></li>
                                <li id="right-profile"><NavLink activeStyle={{ 'color': '#a970ff' }} to="/user/register"><i className="fas fa-user"></i></NavLink></li>
                            </>
                    }
                </ul>
            </section>

        </nav >
    )
}

export default Navbar