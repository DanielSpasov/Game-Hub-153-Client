import { NavLink } from 'react-router-dom'

import './Item.css'

function Item({
    href,
    text,
    id
}) {
    return (
        <span id={id} className="nav-item">
            <NavLink activeStyle={{'color': '#a970ff'}} to={href}>{text}</NavLink>
        </span>
    )
}

export default Item