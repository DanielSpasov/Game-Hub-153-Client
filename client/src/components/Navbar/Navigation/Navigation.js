import './Navigation.css'

import Item from './Item/Item'

function Navigation() {
    return (
        <div className="navigation">
            <Item href="#/categories" text="Categories" id="categories" />
            <Item href="#/games" text="Games" id="games" />
        </div>
    )
}

export default Navigation