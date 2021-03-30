import { Route, Switch } from 'react-router-dom'

import './Body.css'

// Components
import HomePage from './HomePage/HomePage.js'

import Games from './Games/Games'
import AddGames from './Games/AddGames/AddGames'
import GameDetails from './Games/GameDetails/GameDetails'

import Genres from './Genres/Genres'
import AddGenres from './Genres/AddGenres/AddGenres'
import GenreDetails from './Genres/GenreDetails/GenreDetails'

import Devs from './Devs/Devs'
import AddDevs from './Devs/AddDevs/AddDevs'
import DevDetails from './Devs/DevDetails/DevDetails'

import Login from './Login/Login'
import Register from './Register/Register'


function Body({ setAppState }) {

    return (
        <main className="main-container">

            <Switch>

                <Route path="/" component={HomePage} exact />

                <Route path="/games" component={Games} exact />
                <Route path="/games/add" component={AddGames} exact />
                <Route path="/games/:gameId" component={GameDetails} exact />

                <Route path="/genres" component={Genres} exact />
                <Route path="/genres/add" component={AddGenres} exact />
                <Route path="/genres/:genreId" component={GenreDetails} exact />

                <Route path="/devs" component={Devs} exact />
                <Route path="/devs/add" component={AddDevs} exact />
                <Route path="/devs/:devId" component={DevDetails} exact />


                <Route path="/user/login" render={() => <Login setAppState={setAppState} />} exact />
                <Route path="/user/register" component={Register} exact />


                <Route path="*">
                    <h1>404 Not Found</h1>
                </Route>

            </Switch>

        </main>
    )
}

export default Body