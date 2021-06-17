import { Link } from 'react-router-dom'



const InvalidPage = () => {
    return (
        <section>

            <header>
                <h1>Error: 404</h1>
            </header>

            <article>
                <h2>The page you are searching for cannot be found</h2>
                <img src="/invalid-url.png" alt="sad-face" />
            </article>

            <footer>
                <Link to="/">Back to the Home Page</Link>
            </footer>

        </section>
    )
}

export default InvalidPage