import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Card from '../Card'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import './List.css'



const List = () => {

    const history = useHistory()
    const type = history.location.pathname.split('/')[1]

    const [search, setSearch] = useState('')

    const [games, setGames] = useState([])
    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])

    useEffect(() => {
        if (type === 'games') gameService.getAll().then(items => setGames(items))
        if (type === 'genres') genreService.getAll().then(items => setGenres(items))
        if (type === 'devs') devService.getAll().then(items => setDevs(items))
    }, [type])

    const onSearchSubmitHandler = (e) => {
        e.preventDefault()
    }

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value)

        switch (type) {
            // case 'games':
            //     if (e.target.value !== '') gameService.getAll(e.target.value).then(items => setGames(items))
            //     if (e.target.value === '') gameService.getAll('').then(items => setGames(items))
            //     break
            // case 'genres':
            //     if (e.target.value !== '') genreService.getAll(e.target.value).then(items => setGenres(items))
            //     if (e.target.value === '') genreService.getAll('').then(items => setGenres(items))
            //     break
            // case 'devs':
            //     if (e.target.value !== '') devService.getAll(e.target.value).then(items => setDevs(items))
            //     if (e.target.value === '') devService.getAll('').then(items => setDevs(items))
            //     break
            default:
                break
        }
    }
    
    return (
        <section>

            <header>

                <h1>Search {type}:</h1>

                <form onSubmit={onSearchSubmitHandler}>
                    <input
                        placeholder={'Search ' + type}
                        name="searchQuery"
                        type="text"
                        value={search}
                        onChange={onSearchChangeHandler}
                    />
                </form>

            </header>

            <article>
                {type === 'games' ?
                    <>
                        {games.map(game => <Card key={game._id} id={game._id} title={game.title} image={game.image} type={type} />)}
                    </> : null}

                {type === 'genres' ?
                    <>
                        {genres.map(genre => <Card key={genre._id} id={genre._id} title={genre.title} image={genre.image} type={type} />)}
                    </> : null}

                {type === 'devs' ?
                    <>
                        {devs.map(dev => <Card key={dev._id} id={dev._id} title={dev.title} image={dev.image} type={type} />)}
                    </> : null}
            </article>

        </section>
    )
}

export default List