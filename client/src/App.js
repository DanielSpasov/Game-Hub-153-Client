import { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { auth } from './utils/firebase'

import UserContext from './contexts/UserContext'

import Navbar from './components/Navbar/Navbar'

import HomePage from './components/HomePage/HomePage'

import List from './components/List/List'

import Details from './components/Details/Details'

import AddGames from './components/Add/Games'
import AddGenres from './components/Add/Genres'
import AddDevs from './components/Add/Devs'

import AddGameInfo from './components/AddInfo/Game'
import AddGenreInfo from './components/AddInfo/Genre'
import AddDevInfo from './components/AddInfo/Dev'

import Register from './components/Register/Register'
import Login from './components/Login/Login'

import InvalidPage from './components/Common/InvalidPage/InvalidPage'
// import Footer from './components/Footer/Footer'

import './utils/firebase'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'


const App = () => {

    console.log(`App is running in ${process.env.NODE_ENV} mode.`)

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser)
            } else {
                setUser(null)
            }
        })
    }, [])

    const isAuth = Boolean(user)

    return (
        <div className="app">
            <UserContext.Provider value={{ email: user?.email, isAuth: Boolean(user) }}>
                <Navbar />

                <div className="main-container">
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
                </div>
            </UserContext.Provider>
            {/* <Footer /> */}
        </div>
    )
}

export default App
