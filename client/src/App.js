import { useEffect, useState } from 'react'
import { auth } from './utils/firebase'

import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
// import Footer from './components/Footer/Footer'

import './utils/firebase'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


const App = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser)
            } else {
                setUser(null)
            }
        })
    })

    return (
        <div className="app">
            <Navbar email={user?.email} isAuth={Boolean(user)} />
            <Body email={user?.email} isAuth={Boolean(user)} />
            {/* <Footer /> */}
        </div>
    )
}

export default App
