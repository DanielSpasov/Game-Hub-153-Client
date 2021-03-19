import { Route, Switch } from 'react-router-dom'

import './Body.css'

// Components
import HomePage from './HomePage/HomePage.js'

import Games from './Games/Games'
import FollowGames from './Games/FollowGames/FollowGames'
import AddGames from './Games/AddGames/AddGames'

import Genres from './Genres/Genres'
import FollowGenres from './Genres/FollowGenres/FollowGenres'
import AddGenres from './Genres/AddGenres/AddGenres'

import Devs from './Devs/Devs'

import Login from './Login/Login'
import Register from './Register/Register'


function Body() {
    return (
        <main className="main-container">

            <Switch>

                <Route path="/" component={HomePage} exact />

                <Route path="/games" component={Games} exact />
                <Route path="/games/follow" component={FollowGames} exact />
                <Route path="/games/add" component={AddGames} exact />

                <Route path="/genres" component={Genres} exact />
                <Route path="/genres/follow" component={FollowGenres} exact />
                <Route path="/genres/add" component={AddGenres} exact />

                <Route path="/devs" component={Devs} exact />


                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />

            </Switch>

        </main>
    )
}

export default Body