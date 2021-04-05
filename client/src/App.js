import { useEffect, useState } from 'react'
import { auth } from './utils/firebase'

import UserContext from './contexts/UserContext'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
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
    
    return (
        <div className="app">
            <UserContext.Provider value={{ email: user?.email, isAuth: Boolean(user) }}>
                <Navbar />
                <Body />
            </UserContext.Provider>
            {/* <Footer /> */}
        </div>
    )
}

export default App
