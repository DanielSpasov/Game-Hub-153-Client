import './Navigation.css'

import Item from './Item/Item'

const Navigation = () => {
    return (
        <div className="navigation">
            <Item href="/games" text="Games" id="games" />
            <Item href="/genres" text="Genres" id="genres" />
            <Item href="/devs" text="Developers" id="devs" />
        </div>
    )
}

export default Navigation