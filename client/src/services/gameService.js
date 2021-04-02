import { db } from '../utils/firebase'
import errorHandler from '../utils/errorHandler'
import { toast } from 'react-toastify'

const getAll = async (query = '') => {
    let games = await db.collection('games')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .filter(x => x.title.toLowerCase().includes(query.toLowerCase()))
        )
        .catch(errorHandler)
    return games
}

const getOne = async (id) => {
    let game = await db.collection('games')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
    return game
}

const addGame = (game) => {
    db.collection('games')
        .add(game)
        .catch(errorHandler)
}

const upvote = (id, email) => {
    db.collection('games')
        .doc(id)
        .get()
        .then(res => {
            if (res.data().usersUpvoted.includes(email)) throw toast.warning('You have already upvoted this game.')
            res = { ...res.data(), upvotes: res.data().upvotes + 1 }
            res.usersUpvoted.push(email)
            return res
        })
        .then(upvotedGame => {
            db.collection('games')
                .doc(id)
                .set(upvotedGame)
                .then(() => toast.success('Game upvoted.'))
                .catch(errorHandler)
        })
        .catch(errorHandler)
}

const getTopFive = async () => {
    let games = await db.collection('games')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .sort((a, b) => b.upvotes - a.upvotes)
                .slice(0, 5)
        )
        .catch(errorHandler)
    return games
}


const gameService = {
    getAll,
    getOne,
    addGame,
    getTopFive,
    upvote,
}
export default gameService