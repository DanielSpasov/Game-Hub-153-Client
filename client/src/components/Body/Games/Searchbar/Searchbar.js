import './Searchbar.css'

function Searchbar() {
    return (
        <div className="games-search-form">
            <form>
                <input className="search-field" placeholder="Search" type="text" />
            </form>
        </div>
    )
}

export default Searchbar