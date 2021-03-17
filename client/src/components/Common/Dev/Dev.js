import { Link } from 'react-router-dom'

import Image from '../Image/Image'
import './Dev.css'


function Dev({
    orgName,
    imageUrl,
}) {
    // console.log(orgName)
    return (
        <div className="dev-card">
            <Image title={orgName} imageUrl={imageUrl} type='devs' />
            <Link to={'/devs/' + orgName} className="dev-title">{orgName}</Link>
        </div>
    )
}

export default Dev