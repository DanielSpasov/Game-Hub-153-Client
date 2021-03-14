import './Item.css'

function Item({
    href,
    text,
    id
}) {
    return (
        <span id={id} className="nav-item">
            <a href={href}>
                {text}
            </a>
        </span>
    )
}

export default Item