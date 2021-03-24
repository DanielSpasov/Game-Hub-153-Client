import { NavLink } from 'react-router-dom'

import './Item.css'

const Item = ({
    href,
    text,
    id
}) => {
    return (
        <span id={id} className="nav-item">
            <NavLink activeStyle={{'color': '#a970ff'}} to={href}>{text}</NavLink>
        </span>
    )
}

export default Item