import { Link } from 'react-router-dom'

import './Item.css'

function Item({
    href,
    children
}) {
    return (
        <li className="list-item">
            <Link to={href}>{children}</Link>
        </li>
    )
}

export default Item