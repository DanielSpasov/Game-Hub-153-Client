import { useContext } from 'react'
import { auth } from '../../utils/firebase'

import UserContext from '../../contexts/UserContext'

import './Body.css'

// Components
import HomePage from './HomePage/HomePage.js'

import List from './List/List'
import Details from './Details/Details'

import AddGames from './Add/Games'
import AddGenres from './Add/Genres'
import AddDevs from './Add/Devs'

import AddGameInfo from './AddInfo/Game'
import AddGenreInfo from './AddInfo/Genre'
import AddDevInfo from './AddInfo/Dev'

import Login from './Login/Login'
// import Register from './Register/Register'

import InvalidPage from '../Common/InvalidPage/InvalidPage'


function Body() {

    const { isAuth } = useContext(UserContext)

    return (
        <main className="main-container">

            

        </main>
    )
}

export default Body