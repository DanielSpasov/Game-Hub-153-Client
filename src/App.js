import { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { auth } from './utils/firebase'
import './utils/firebase'

// Contexts
import { UserProvider } from './contexts/UserContext'

// Components 
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
import Comment from './components/Comment/Comment'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import InvalidPage from './components/InvalidPage/InvalidPage'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


// css
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

    let email = user ? user.email : null
    let isAuth = Boolean(user)

    return (
        <div className="app">
            <UserProvider value={{ email, isAuth }}>
                <Navbar />

                <div className="main-container">
                    <Switch>

                        <Route exact path="/" component={HomePage} />

                        <Route exact path="/games" component={List} />
                        <ProtectedRoute exact={true} path="/games/:gameId" component={Details} />
                        <ProtectedRoute exact={true} path="/games/:gameId/addInfo" component={AddGameInfo} />
                        <ProtectedRoute exact={true} path="/games/:gameId/comment" component={Comment} />

                        <Route exact path="/genres" component={List} />
                        <ProtectedRoute exact path="/genres/:genreId" component={Details} />
                        <ProtectedRoute exact path="/genres/:genreId/addInfo" component={AddGenreInfo} />
                        <ProtectedRoute exact path="/genres/:genreId/comment" component={Comment} />

                        <Route exact path="/devs" component={List} />
                        <ProtectedRoute exact path="/devs/:devId" component={Details} />
                        <ProtectedRoute exact path="/devs/:devId/addInfo" component={AddDevInfo} />
                        <ProtectedRoute exact path="/devs/:devId/comment" component={Comment} />

                        <ProtectedRoute exact path="/add/games" component={AddGames} />
                        <ProtectedRoute exact path="/add/genres" component={AddGenres} />
                        <ProtectedRoute exact path="/add/devs" component={AddDevs} />

                        <Route exact path="/user/login" component={Login} />
                        <Route exact path="/user/register" component={Register} />
                        <Route exact path="/user/logout" render={() => {
                            auth.signOut()
                            return <Redirect to="/" />
                        }} />


                        <Route path="*" component={InvalidPage} />

                    </Switch>
                </div>
            </UserProvider>
        </div>
    )
}

export default App
