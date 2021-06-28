import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import gameService from '../../../services/gameService'
import genreService from '../../../services/genreService'
import devService from '../../../services/devService'

import errorHandler from '../../../utils/errorHandler'

import AlertBox from '../../AlertBox'
import { toast } from 'react-toastify'



const EditAlert = ({ editAlert, setEditAlert, item, setItem }) => {

    const history = useHistory()
    const type = history.location.pathname.split('/')[1]

    const [genres, setGenres] = useState([])
    const [devs, setDevs] = useState([])

    let title = item.title
    let image = item.image
    let description = item.description
    let moreInfo = item.moreInfo
    let videoUrl = item.videoUrl
    const [genre, setGenre] = useState('')
    const [dev, setDev] = useState('')

    const onTitleChangeHandler = (e) => title = e.target.value
    const onImageChangeHandler = (e) => image = e.target.value
    const onDescriptionChangeHandler = (e) => description = e.target.value
    const onMoreInfoChangeHandler = (e) => moreInfo = e.target.value
    const onVideoUrlChangeHandler = (e) => videoUrl = e.target.value
    const onGenreChangeHandler = (e) => setGenre(e.target.value)
    const onDevChangeHandler = (e) => setDev(e.target.value)

    useEffect(() => {
        const fetchData = async () => {
            if (type === 'games') {
                setGenres(await genreService.getAll())
                setDevs(await devService.getAll())
                if (item.genre) setGenre(item.genre._id)
                if (item.dev) setDev(item.dev._id)
            }
        }
        fetchData()
    }, [type, item])

    const handleEditYes = async () => {
        try {
            let res
            if (type === 'games') {
                let gameInfo = { title, image, description, moreInfo, videoUrl, genre, dev }
                res = await gameService.editOne(item._id, gameInfo)
            }
            if (type === 'genres') {
                let genreInfo = { title, image, description }
                res = await genreService.editOne(item._id, genreInfo)
            }
            if (type === 'devs') {
                let devInfo = { title, image, description }
                res = await devService.editOne(item._id, devInfo)
            }
            if (res) {
                toast.success(`${type.slice(0, type.length - 1).replace(type[0], type[0].toUpperCase())} edited successfully.`)
                setItem(res)
                setEditAlert('hide')
            }
        } catch (err) { errorHandler(err) }
    }

    const handleEditNo = () => { setEditAlert('hide') }


    return (
        <AlertBox display={editAlert} yesHandler={handleEditYes} noHandler={handleEditNo} type="edit">
            <form onSubmit={handleEditYes}>

                <input type="text" name="title" placeholder={type + ' name'} defaultValue={item.title} onChange={onTitleChangeHandler} />
                <input type="text" name="image" placeholder="image url" defaultValue={item.image} onChange={onImageChangeHandler} />

                <textarea type="text" name="description" placeholder={type + ' description'} defaultValue={item.description} onChange={onDescriptionChangeHandler}></textarea>

                {
                    type === 'games' ? <>
                        <input type="text" name="videoUrl" placeholder="gameplay video" defaultValue={item.videoUrl} onChange={onVideoUrlChangeHandler} />
                    </> : null
                }

                {
                    type === 'games' ? <>
                        <textarea type="text" name="moreInfo" placeholder="more information about the game" defaultValue={item.moreInfo} onChange={onMoreInfoChangeHandler}></textarea>
                    </> : null
                }

                {
                    type === 'games' ? <>
                        <select name="genre" value={genre} onChange={onGenreChangeHandler}>
                            {genres.map(x => <option key={x._id} value={x._id} >{x.title}</option>)}
                        </select>

                        <select name="dev" value={dev} onChange={onDevChangeHandler}>
                            {devs.map(x => <option key={x._id} value={x._id}>{x.title}</option>)}
                        </select>
                    </> : null
                }

            </form>
        </AlertBox>
    )
}



export default EditAlert