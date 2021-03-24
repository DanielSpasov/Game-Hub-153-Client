import Options from './Options/Options'

import './DropdownMenu.css'

const DropdownMenu = () => {
    return (
        <div className="dropdown">

            <span className="dots">...</span>

            <Options />

        </div>
    )
}

export default DropdownMenu