import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

// Contexts
import { UserProvider } from './contexts/UserContext'

// Components 
import Navbar from './components/Navbar'

import Home from './components/Home'
import List from './components/List'
import Details from './components/Details'

import AddItem from './components/AddItem'
import Edit from './components/Edit'

import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'

import InvalidPage from './components/InvalidPage'

import ProtectedRoute from './components/ProtectedRoute'

// css
import 'react-toastify/dist/ReactToastify.css';
import './common-css/fields.css'
import './common-css/icons.css'
import './common-css/buttons.css'
import './App.css'

const db_uri = process.env.REACT_APP_DB_URI



const App = () => {

    const [userData, setUserData] = useState({})

    useEffect(() => {

        console.log(`App is running in ${process.env.NODE_ENV} mode.`)

        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token')
            if (token === null) {
                localStorage.setItem('auth-token', '')
                token = ''
            }

            const tokenResponse = await axios.post(`${db_uri}/user/tokenIsValid`, null, {
                headers: { 'x-auth-token': token }
            })

            if (tokenResponse.data) {
                const userResponse = await axios.get(`${db_uri}/user/`, {
                    headers: { 'x-auth-token': token }
                })
                setUserData({ token, user: userResponse.data })
            }
        }

        checkLoggedIn()
    }, [])

    return (
        <div className="app">
            <UserProvider value={{ userData, setUserData }}>
                <Navbar />

                <main>
                    <Switch>

                        <Route exact path="/" component={Home} />

                        <Route exact path="/games" component={List} />
                        <ProtectedRoute exact path="/games/:itemID" component={Details} />
                        <ProtectedRoute exact path="/games/:itemID/edit" component={Edit} />

                        <Route exact path="/genres" component={List} />
                        <ProtectedRoute exact path="/genres/:itemID" component={Details} />
                        <ProtectedRoute exact path="/genres/:itemID/edit" component={Edit} />

                        <Route exact path="/devs" component={List} />
                        <ProtectedRoute exact path="/devs/:itemID" component={Details} />
                        <ProtectedRoute exact path="/devs/:itemID/edit" component={Edit} />

                        <ProtectedRoute exact path="/add/game" component={AddItem} />
                        <ProtectedRoute exact path="/add/genre" component={AddItem} />
                        <ProtectedRoute exact path="/add/dev" component={AddItem} />

                        <Route exact path="/profile" component={Home} />

                        <Route exact path="/user/login" component={Login} />
                        <Route exact path="/user/register" component={Register} />
                        <Route exact path="/user/logout" component={Logout} />


                        <Route path="*" component={InvalidPage} />

                    </Switch>
                </main>
            </UserProvider>
        </div>
    )
}

export default App
