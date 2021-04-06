import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
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
import Register from './Register/Register'

import InvalidPage from '../Common/InvalidPage/InvalidPage'


function Body() {

    const { isAuth } = useContext(UserContext)

    return (
        <main className="main-container">

            <Switch>

                <Route exact path="/" component={HomePage} />

                <Route exact path="/games" component={List} />
                <Route exact path="/games/:gameId" component={Details} />
                <Route exact path="/games/:gameId/addInfo" render={() => (isAuth ? (<AddGameInfo />) : (<Redirect to="/user/login" />))} />

                <Route exact path="/genres" component={List} />
                <Route exact path="/genres/:genreId" component={Details} />
                <Route exact path="/genres/:genreId/addInfo" render={() => (isAuth ? (<AddGenreInfo />) : (<Redirect to="/user/login" />))} />

                <Route exact path="/devs" component={List} />
                <Route exact path="/devs/:devId" component={Details} />
                <Route exact path="/devs/:devId/addInfo" render={() => (isAuth ? (<AddDevInfo />) : (<Redirect to="/user/login" />))} />

                <Route exact path="/add/games" render={() => (isAuth ? (<AddGames />) : (<Redirect to="/user/login" />))} />
                <Route exact path="/add/genres" render={() => (isAuth ? (<AddGenres />) : (<Redirect to="/user/login" />))} />
                <Route exact path="/add/devs" render={() => (isAuth ? (<AddDevs />) : (<Redirect to="/user/login" />))} />

                <Route exact path="/user/login" render={() => (isAuth ? (<Redirect to="/" />) : (<Login />))} />
                <Route exact path="/user/register" render={() => (isAuth ? (<Redirect to="/" />) : (<Register />))} />
                <Route exact path="/user/logout" render={() => {
                    auth.signOut()
                    return <Redirect to="/" />
                }} />


                <Route path="*" component={InvalidPage} />

            </Switch>

        </main>
    )
}

export default Body