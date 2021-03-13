import { Component } from 'react'

import './DropdownMenu.css'

import Options from './Options/Options'

class DropdownMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuIsOpen: false
        }
    }


    render() {
        return (
            <div className="dropdown">

                <span>...</span>

                <Options />

            </div>
        )
    }
}

export default DropdownMenu