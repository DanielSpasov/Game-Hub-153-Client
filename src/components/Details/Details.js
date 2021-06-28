import { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouteMatch, useHistory } from 'react-router-dom'

import UserContext from '../../contexts/UserContext'

import gameService from '../../services/gameService'
import genreService from '../../services/genreService'
import devService from '../../services/devService'

import errorHandler from '../../utils/errorHandler'

import InfoBox from '../InfoBox'
import Card from '../Card'
import Comment from '../Comment'

import DeleteAlert from './DeleteAlert'
import EditAlert from './EditAlert'
import EditorsAlert from './EditorsAlert'

import ButtonsBox from './ButtonsBox'

import './Details.css'



const Details = () => {

    const { itemID } = useRouteMatch().params
    const type = useHistory().location.pathname.split('/')[1]

    const { userData } = useContext(UserContext)

    const [item, setItem] = useState({})

    useEffect(() => {
        let componentMounted = true

        const fetchData = async () => {
            let item
            if (type === 'games') item = await gameService.getOne(itemID)
            if (type === 'genres') item = await genreService.getOne(itemID)
            if (type === 'devs') item = await devService.getOne(itemID)
            if (componentMounted) setItem(item)
        }
        fetchData()

        return () => { componentMounted = false }
    }, [itemID, type])

    const handleComment = async (e) => {
        e.preventDefault()
        try {
            let content = e.target.content.value
            let res
            if (type === 'games') res = await gameService.comment(itemID, content, userData.user.id)
            if (type === 'genres') res = await genreService.comment(itemID, content, userData.user.id)
            if (type === 'devs') res = await devService.comment(itemID, content, userData.user.id)
            if(res) {
                setItem(res)
                toast.success(`Your comment on ${item.title} was sent.`)
                e.target.content.value = ''
            }
        } catch (err) { errorHandler(err) }
    }

    const [editAlert, setEditAlert] = useState('hide')
    const [editorsAlert, setEditorsAlert] = useState('hide')
    const [deleteAlert, setDeleteAlert] = useState('hide')

    return (
        <section>

            <header>
                <h1>{item.title}</h1>
            </header>

            <article>

                <div><img className="blockbuster-image" src={item.image} alt={item.title} /></div>

                <DeleteAlert deleteAlert={deleteAlert} setDeleteAlert={setDeleteAlert} />
                <EditAlert editAlert={editAlert} setEditAlert={setEditAlert} item={item} setItem={setItem} />
                <EditorsAlert editorsAlert={editorsAlert} setEditorsAlert={setEditorsAlert} item={item} setItem={setItem} />

                <ButtonsBox
                    item={item}
                    setItem={setItem}
                    setDeleteAlert={setDeleteAlert}
                    setEditorsAlert={setEditorsAlert}
                    setEditAlert={setEditAlert}
                />

                <InfoBox title="Description"><p>{item.description}</p></InfoBox>

                {item.videoUrl ?
                    <InfoBox title="Gameplay Video">
                        <div className="video-player">
                            <iframe width="560" height="315" src={item.videoUrl.replace('watch?v=', 'embed/')} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </InfoBox> : null}


                {item.moreInfo ?
                    <InfoBox title="More Information">
                        <p>{item.moreInfo}</p>
                    </InfoBox> : null}


                {type === 'games' && item.genre ?
                    <InfoBox title="Game Genre">
                        <Card key={item.genre._id} id={item.genre._id} title={item.genre.title} image={item.genre.image} type={'genres'} />
                    </InfoBox> : null}


                {type === 'games' && item.dev ?
                    <InfoBox title="Game Developer">
                        <Card key={item.dev._id} id={item.dev._id} title={item.dev.title} image={item.dev.image} type={'devs'} />
                    </InfoBox> : null}


                {type === 'devs' ? item.gamesByDev ?
                    <InfoBox title="Games made by this Developers">
                        {item.gamesByDev.map(game => <Card key={game._id} id={game._id} title={game.title} image={game.image} type={'games'} />)}
                    </InfoBox> : <InfoBox title="There is currently no games from this Developers" /> : null}


                {type === 'genres' ? item.gamesInGenre ?
                    <InfoBox title="Games in this Genre">
                        {item.gamesInGenre.map(game => <Card key={game._id} id={game._id} title={game.title} image={game.image} type={'games'} />)}
                    </InfoBox> : <InfoBox title="There is currently no games in this Genre" /> : null}


                <InfoBox title="Add Comment">
                    <form onSubmit={handleComment}>
                        <textarea name="content" placeholder="comment"></textarea>
                        <button>Comment</button>
                    </form>
                </InfoBox>


                {item.comments ? item.comments.length ?
                    <InfoBox title="Comments">
                        {item.comments.map(x => <Comment key={x.author._id + x.content} username={x.author.username} content={x.content} />)}
                    </InfoBox> : <InfoBox title={`There is no comments on this ${type.slice(0, type.length - 1)}`} /> : null}

            </article>
            <ToastContainer />
        </section >
    )
}

export default Details