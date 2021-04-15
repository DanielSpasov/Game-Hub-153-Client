import Game from '../Common/Game/Game'
import Genre from '../Common/Genre/Genre'
import Dev from '../Common/Dev/Dev'

const TopFive = ({
    category,
    items
}) => {

    let title
    let itemsContainer

    if (category === 'games') {
        title = <h2>Our top 5 most upvoted games</h2>
        itemsContainer = <div>{items?.map(x => <Game id={x.id} key={x.id} title={x.title} imageUrl={x.imageUrl} />)}</div>
    }
    if (category === 'genres') {
        title = <h2>Our top 5 most upvoted genres</h2>
        itemsContainer = <div>{items?.map(x => <Genre id={x.id} key={x.id} name={x.name} imageUrl={x.imageUrl} />)}</div>
    }
    if (category === 'devs') {
        title = <h2>Our top 5 most upvoted game developers</h2>
        itemsContainer = <div>{items?.map(x => <Dev id={x.id} key={x.id} orgName={x.orgName} imageUrl={x.imageUrl} />)}</div>
    }


    return (
        <div>
            {title}
            {itemsContainer}
        </div>
    )
}

export default TopFive