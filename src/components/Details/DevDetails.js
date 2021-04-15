import { useState, useEffect } from 'react'

import Game from '../Common/Game/Game'

import errorHandler from '../../utils/errorHandler'

import devService from '../../services/devService'


const DevDetails = ({ dev }) => {

    const [games, setGames] = useState(null)

    useEffect(() => {
        devService.getGames(dev?.id)
            .then(res => setGames(res))
            .catch(errorHandler)
    }, [dev?.id])

    let items = games?.map(x => <Game key={x.id} title={x.title} imageUrl={x.imageUrl} id={x.id} />)
    let gamesCreated = games?.length > 0 ?
        <div><h3>Games this developers have created:</h3>{items}</div> : 
        <div><h3>There is no games this developers have created</h3></div>

    return (
        <div>
            <div>
                <img src={dev?.imageUrl} alt={dev?.title} height="400px" width="400px" />
            </div>
            {gamesCreated}
        </div>
    )
}

export default DevDetails