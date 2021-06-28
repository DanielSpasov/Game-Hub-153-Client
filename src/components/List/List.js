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

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            let res
            if (type === 'games') res = await gameService.getAll()
            if (type === 'genres') res = await genreService.getAll()
            if (type === 'devs') res = await devService.getAll()
            if (res) setItems(res)
        }
        fetchItems()
    }, [type])

    const onSearchSubmitHandler = (e) => {
        e.preventDefault()

        const fetchData = async () => {
            let res
            if (type === 'games') res = await gameService.getAll(search)
            if (type === 'genres') res = await genreService.getAll(search)
            if (type === 'devs') res = await devService.getAll(search)
            if (res) setItems(res)
        }
        fetchData()
    }

    const onSearchChangeHandler = (e) => setSearch(e.target.value)

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
                {items.map(item => <Card
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    image={item.image}
                    type={type}
                />)}
            </article>

        </section>
    )
}

export default List