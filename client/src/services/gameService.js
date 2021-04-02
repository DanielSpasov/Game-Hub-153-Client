import { db } from '../utils/firebase'
import errorHandler from '../utils/errorHandler'
import { toast } from 'react-toastify'

export const getAll = async () => {
    let games = await db.collection('games')
        .get()
        .then(res => res.docs.map(x => x = { id: x.id, ...x.data() }))
        .catch(errorHandler)
    return games
}

export const getOne = async (id) => {
    let game = await db.collection('games')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
    return game
}

export const addGame = (game) => {
    db.collection('games')
        .add(game)
        .catch(errorHandler)
}

export const upvote = (id, email) => {
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