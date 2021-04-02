import { useEffect, useState } from 'react'

import Game from '../../Common/Game/Game'
import Genre from '../../Common/Genre/Genre'
import Dev from '../../Common/Dev/Dev'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'

import './List.css'

const List = ({
    category
}) => {

    const [search, setSearch] = useState('')

    const [games, setGames] = useState(null)
    const [genres, setGenres] = useState(null)
    const [devs, setDevs] = useState(null)


    let title
    let items

    if (category === 'games') {
        title = <h1>Search Games:</h1>

        items = games?.map(x => <Game key={x.id} title={x.title} imageUrl={x.imageUrl} id={x.id} />)
    }

    if (category === 'genres') {
        title = <h1>Search Genres:</h1>
        items = genres?.map(x => <Genre key={x.id} name={x.name} imageUrl={x.imageUrl} id={x.id} />)
    }

    if (category === 'devs') {
        title = <h1>Search Game Developers:</h1>
        items = devs?.map(x => <Dev key={x.id} orgName={x.orgName} imageUrl={x.imageUrl} id={x.id} />)
    }

    useEffect(() => {
        gameService.getAll().then(items => setGames(items))
        genreService.getAll().then(items => setGenres(items))
    }, [])

    const onSearchSubmitHandler = (e) => {
        e.preventDefault()
        gameService.getAll(search).then(items => setGames(items))
    }

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value !== '') gameService.getAll(e.target.value).then(items => setGames(items))
        if (e.target.value === '') gameService.getAll('').then(items => setGames(items))
    }

    return (
        <div className="games-section">

            {title}

            <div className="games-nav-container" >
                <div className="games-search-form">
                    <form onSubmit={onSearchSubmitHandler}>
                        <input
                            className="search-field"
                            placeholder="Search"
                            name="searchQuery"
                            type="text"
                            value={search}
                            onChange={onSearchChangeHandler}
                        />
                    </form>
                </div>
            </div>

            <div className="games-container">
                {items}
            </div>

        </div>
    )
}

export default List