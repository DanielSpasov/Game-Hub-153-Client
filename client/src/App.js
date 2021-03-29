import { useState, useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Body from './components/Body/Body'
// import Footer from './components/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import userService from './services/userService'


const App = () => {

    const [state, setState] = useState({ isAuth: false, user: null })

    const handleUpdate = (user) => {
        if (state.user) return
        if (user !== undefined) setState({ isAuth: true, user: user })
    }

    useEffect(() => {
        userService.verifyToken(document.cookie.split('x-auth-token=')[1])
            .then(userInfo => {
                if (userInfo) {
                    handleUpdate({ id: userInfo.id, username: userInfo.username })
                }
            })
    })



    return (
        <div className="app">
            <Navbar isAuth={state.isAuth} />
            <Sidebar isAuth={state.isAuth} />
            <Body setAppState={handleUpdate} />
            {/* <Footer /> */}
        </div>
    )
}

export default App
