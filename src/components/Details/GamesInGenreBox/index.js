import InfoBox from '../../InfoBox'
import Card from '../../Card'



const GamesInGenreBox = ({ games, type }) => {
    return (
        type === 'genres' ? games ?
            <InfoBox title="Games in this Genre">
                {games.map(game => <Card key={game.id} id={game.id} title={game.title} image={game.image} type={'games'} />)}
            </InfoBox> : <InfoBox title="There is currently no games in this Genre" /> : null
    )
}

export default GamesInGenreBox