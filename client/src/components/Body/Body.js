import { Redirect, Route, Switch } from 'react-router-dom'
import { auth } from '../../utils/firebase'

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


function Body({
    email,
    isAuth
}) {
    return (
        <main className="main-container">

            <Switch>

                <Route exact path="/" component={HomePage} />

                <Route exact path="/games" render={() => <List category="games" />} />
                <Route exact path="/games/:gameId" render={() => <Details email={email} isAuth={isAuth} category="game" />} />
                <Route exact path="/games/:gameId/addInfo" render={() => (isAuth ? (<AddGameInfo />) : (<Redirect to="/user/login" />) )} />

                <Route exact path="/genres" render={() => <List category="genres" />} />
                <Route exact path="/genres/:genreId" render={() => <Details email={email} isAuth={isAuth} category="genre" />} />
                <Route exact path="/genres/:genreId/addInfo" render={() => (isAuth ? (<AddGenreInfo />) : (<Redirect to="/user/login" />) )} />

                <Route exact path="/devs" render={() => <List category="devs" />} />
                <Route exact path="/devs/:devId" render={() => <Details email={email} isAuth={isAuth} category="dev" />} />
                <Route exact path="/devs/:devId/addInfo" render={() => (isAuth ? (<AddDevInfo />) : (<Redirect to="/user/login" />) )} />

                <Route exact path="/add/games" render={() => (isAuth ? (<AddGames />) : (<Redirect to="/user/login" />) )} />
                <Route exact path="/add/genres" render={() => (isAuth ? (<AddGenres />) : (<Redirect to="/user/login" />) )} />
                <Route exact path="/add/devs" render={() => (isAuth ? (<AddDevs />) : (<Redirect to="/user/login" />) )} />

                <Route exact path="/user/login" render={() => (isAuth ? (<Redirect to="/" />) : (<Login />) )} />
                <Route exact path="/user/register" render={() => (isAuth ? (<Redirect to="/" />) : (<Register />) )} />
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