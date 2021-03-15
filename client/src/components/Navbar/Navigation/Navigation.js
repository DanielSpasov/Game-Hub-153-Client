import './Navigation.css'

import Item from './Item/Item'

function Navigation() {
    return (
        <div className="navigation">
            <Item href="/followGames" text="Follow Games" id="follow-games" />
            <Item href="/genres" text="Genres" id="genres" />
            <Item href="/games" text="Games" id="games" />
            <Item href="/developers" text="Developers" id="developers" />
        </div>
    )
}

export default Navigation