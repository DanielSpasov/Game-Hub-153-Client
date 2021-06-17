import InfoBox from '../../InfoBox'
import Card from '../../Card'



const GameGenreBox = ({ genre, type }) => {
    return (
        type === 'games' && genre ?
            <InfoBox title="Game Genre">
                <Card key={genre._id} id={genre._id} title={genre.title} image={genre.image} type={'genres'} />
            </InfoBox> : null
    )
}

export default GameGenreBox