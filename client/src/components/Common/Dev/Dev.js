import { Link } from 'react-router-dom'

import Image from '../Image/Image'

import './Dev.css'

const Dev = ({
    orgName,
    imageUrl,
    page
}) => {

    const button = page === 'followDevs' ?
        <div className="follow-div">
            <Link to={`/devs/follow/${orgName}`} className="follow-link">Follow</Link>
        </div>
        : null

    return (
        <div className="dev-card">
            <Image title={orgName} imageUrl={imageUrl} type='devs' />
            <Link to={'/devs/' + orgName} className="dev-title">{orgName}</Link>
            {button}
        </div>
    )
}

export default Dev