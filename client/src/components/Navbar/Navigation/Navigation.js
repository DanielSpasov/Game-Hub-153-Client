import './Navigation.css'

import Item from './Item/Item'

const Navigation = ({ isAuth }) => {

    let addItems = isAuth ? (
        <>
            <Item href="/games/add" text="Add Games" id="addGames" />
            <Item href="/genres/add" text="Add Genres" id="addGenres" />
            <Item href="/devs/add" text="Add Devs" id="addDevs" />
        </>
    ) : null


    return (
        <div className="navigation">
            <Item href="/games" text="Games" id="games" />
            <Item href="/genres" text="Genres" id="genres" />
            <Item href="/devs" text="Devs" id="devs" />
            {addItems}
        </div>
    )
}

export default Navigation