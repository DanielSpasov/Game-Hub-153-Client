import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Body from './components/Body/Body'
// import Footer from './components/Footer/Footer'

import userService from './services/userService'

const App = () => {

    window.locals = {
        user: {},
    }

    userService.verifyToken(document.cookie.split('x-auth-token=')[1])
        .then(userInfo => window.locals.user = userInfo)

    return (
        <div className="app">

            <Navbar />
            <Sidebar />
            <Body />
            {/* <Footer /> */}

        </div>
    )
}

export default App
