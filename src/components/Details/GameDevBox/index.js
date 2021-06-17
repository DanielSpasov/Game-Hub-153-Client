import InfoBox from '../../InfoBox'
import Card from '../../Card'



const GameDevBox = ({ dev, type }) => {
    return (
        type === 'games' && dev ?
            <InfoBox title="Game Developer">
                <Card key={dev._id} id={dev._id} title={dev.title} image={dev.image} type={'devs'} />
            </InfoBox> : null
    )
}

export default GameDevBox