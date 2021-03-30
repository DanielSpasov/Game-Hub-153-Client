import Game from '../../Common/Game/Game'
import Genre from '../../Common/Genre/Genre'
import Dev from '../../Common/Dev/Dev'

const TopFive = ({ category, items }) => {

    let title
    let itemsContainer

    if (category === 'games') {
        title = <h2>Our top 5 most followed games</h2>
        itemsContainer = <div>{items.map(x => <Game key={x._id} title={x.title} imageUrl={x.imageUrl} />)}</div>
    }
    if (category === 'genres') {
        title = <h2>Our top 5 most followed genres</h2>
        itemsContainer = <div>{items.map(x => <Genre key={x._id} name={x.name} imageUrl={x.imageUrl} />)}</div>
    }
    if (category === 'devs') {
        title = <h2>Our top 5 most followed game developers</h2>
        itemsContainer = <div>{items.map(x => <Dev key={x._id} orgName={x.orgName} imageUrl={x.imageUrl} />)}</div>
    }


    return (
        <div>
            {title}
            {itemsContainer}
        </div>
    )
}

export default TopFive