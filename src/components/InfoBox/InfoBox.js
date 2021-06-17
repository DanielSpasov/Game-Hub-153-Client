import { useState } from 'react'

import './InfoBox.css'



const InfoBox = (props) => {

    const [contentState, setContentState] = useState('visible')

    const handleContentState = () => {
        if (contentState === 'hidden') setContentState('visible')
        if (contentState === 'visible') {
            setContentState('visuallyHidden')
            setTimeout(() => {
                setContentState('hidden')
            }, 700)
        }
    }

    return (
        <div className="info-box">
            <hr />
            <h2 className="info-box-title" onClick={handleContentState}>{props.title}</h2>

            <div className={`info-box-content ${contentState}`}>
                {props.children}
            </div>
        </div>
    )
}

export default InfoBox