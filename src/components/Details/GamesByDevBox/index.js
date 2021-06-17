import InfoBox from '../../InfoBox'
import Card from '../../Card'



const GamesByDevBox = ({ games, type }) => {
    return (
        type === 'devs' ? games ?
            <InfoBox title="Games made by this Developers">
                {games.map(game => <Card key={game.id} id={game.id} title={game.title} image={game.image} type={'games'} />)}
            </InfoBox> : <InfoBox title="There is currently no games from this Developers" /> : null
    )
}

export default GamesByDevBox