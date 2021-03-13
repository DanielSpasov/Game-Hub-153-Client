import './Item.css'

function Item({
    href,
    children
}) {
    return (
        <li className="list-item">
            <a href={href}>{children}</a>
        </li>
    )
}

export default Item