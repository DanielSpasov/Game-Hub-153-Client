import './Logo.css'

function Logo() {
    return (
        <div className="logo">
            <a href="#/">
                <img alt="Home" src="logo-white512.png" width="40px" height="40px" />
            </a>
            <a href="#/">
                <img alt="Home" src="logo-purple512.png" width="40px" height="40px" className="img-top" />
            </a>
        </div>
    )
}

export default Logo

