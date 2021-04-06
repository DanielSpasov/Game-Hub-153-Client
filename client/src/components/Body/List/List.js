import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Game from '../../Common/Game/Game'
import Genre from '../../Common/Genre/Genre'
import Dev from '../../Common/Dev/Dev'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import './List.css'

const List = () => {

    const location = useLocation()

    const [search, setSearch] = useState('')

    const [games, setGames] = useState(null)
    const [genres, setGenres] = useState(null)
    const [devs, setDevs] = useState(null)

    let title
    let items

    switch (location.pathname) {
        case '/games':
            title = <h1>Search Games:</h1>
            items = games?.map(x => <Game key={x.id} title={x.title} imageUrl={x.imageUrl} id={x.id} />)
            break
        case '/genres':
            title = <h1>Search Genres:</h1>
            items = genres?.map(x => <Genre key={x.id} name={x.name} imageUrl={x.imageUrl} id={x.id} />)
            break
        case '/devs':
            title = <h1>Search Game Developers:</h1>
            items = devs?.map(x => <Dev key={x.id} orgName={x.orgName} imageUrl={x.imageUrl} id={x.id} />)
            break
        default:
            break
    }

    useEffect(() => {
        gameService.getAll().then(items => setGames(items))
        genreService.getAll().then(items => setGenres(items))
        devService.getAll().then(items => setDevs(items))
    }, [])

    const onSearchSubmitHandler = (e) => {
        e.preventDefault()
    }

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value)

        switch (location.pathname) {
            case '/games':
                if (e.target.value !== '') gameService.getAll(e.target.value).then(items => setGames(items))
                if (e.target.value === '') gameService.getAll('').then(items => setGames(items))
                break
            case '/genres':
                if (e.target.value !== '') genreService.getAll(e.target.value).then(items => setGenres(items))
                if (e.target.value === '') genreService.getAll('').then(items => setGenres(items))
                break
            case '/devs':
                if (e.target.value !== '') devService.getAll(e.target.value).then(items => setDevs(items))
                if (e.target.value === '') devService.getAll('').then(items => setDevs(items))
                break
            default:
                break
        }
    }

    return (
        <div className="main-section">

            {title}

            <div className="nav-container" >
                <div className="search-form-div">
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

            <div className="items-container">
                {items}
            </div>

        </div>
    )
}

export default List