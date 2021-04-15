import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Dev.css'

const Dev = ({
    orgName,
    imageUrl,
    id
}) => {
    return (
        <div className="dev-card">
            <Image id={id} title={orgName} imageUrl={imageUrl} type='devs' />
            <Link to={'/devs/' + id} className="dev-title">{orgName}</Link>
        </div>
    )
}

export default Dev