import { NavLink } from 'react-router-dom'

import './Item.css'

function Item({
    href,
    text,
    id
}) {
    return (
        <span id={id} className="nav-item">
            <NavLink to={href}>{text}</NavLink>
        </span>
    )
}

export default Item