import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Body from './components/Body/Body'
// import Footer from './components/Footer/Footer'

const App = () => {
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
