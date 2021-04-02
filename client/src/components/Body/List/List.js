import { useEffect, useState } from 'react'

import Game from '../../Common/Game/Game'
import gameService from '../../../services/gameService'

import './List.css'

const List = ({
    category
}) => {

    const [games, setGames] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        gameService.getAll().then(items => setGames(items))
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

            <h1>Search Games:</h1>

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
                {games?.map(x =>
                    <Game
                        key={x.id}
                        title={x.title}
                        imageUrl={x.imageUrl}
                        id={x.id}
                    />
                )}
            </div>

        </div>
    )
}

export default List