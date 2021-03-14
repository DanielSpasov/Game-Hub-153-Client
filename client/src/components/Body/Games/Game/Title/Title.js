import './Title.css'

function Title({
    title
}) {
    return (
        <a className="game-title" href="#/titleRedirect">{title}</a>
    )
}

export default Title