import { Component } from 'react'
import { Link } from 'react-router-dom'

import './Image.css'

class Image extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bgColor: ''
        }
    }

    componentDidMount() {
        if (this.props.type === 'games') this.setState({ bgColor: '#a970ff' })
        if (this.props.type === 'genres') this.setState({ bgColor: '#fa3e3e' })
    }

    render() {
        return (
            <div className="image-box" style={{backgroundColor: this.state.bgColor}}>
                <Link to={`/${this.props.type}/${this.props.title}`}>
                    <img
                        className="game-image"
                        width="200px"
                        height="280px"
                        src={this.props.imageUrl}
                        alt={this.props.title}
                    />
                </Link>
            </div>
        )
    }
}


export default Image