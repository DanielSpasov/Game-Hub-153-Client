import { Link } from 'react-router-dom'

import './InvalidPage.css'

const InvalidPage = () => {
   return (
      <div className="invalid-page-div">
         <h1>Error: 404</h1>
         <h2>The page you are searching for cannot be found</h2>
         <img src="/invalid-url.png" alt="sad-face" />
         <Link to="/">Back to the Home Page</Link>
      </div>
   )
}

export default InvalidPage