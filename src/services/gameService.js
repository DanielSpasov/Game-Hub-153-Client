import { db } from '../utils/firebase'
import { toast } from 'react-toastify'

import errorHandler from '../utils/errorHandler'



const getAll = (query = '') => {
    return db.collection('games')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .filter(x => x.title.toLowerCase().includes(query.toLowerCase()))
        )
        .catch(errorHandler)
}

const getOne = (id) => {
    return db.collection('games')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
}

const add = (game) => {
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

const getTopFive = () => {
    return db.collection('games')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .sort((a, b) => b.upvotes - a.upvotes)
                .slice(0, 5)
        )
        .catch(errorHandler)
}

const editOne = (id, data) => {
    return db.collection('games')
        .doc(id)
        .update(data)
        .catch(errorHandler)
}

const comment = (commentContent, email, id) => {
    return db.collection('games')
        .doc(id)
        .get()
        .then(res => {
            res = res.data()
            res.comments.push({ user: email, content: commentContent })
            return res
        })
        .then(data => {
            db.collection('games')
                .doc(id)
                .update(data)
                .catch(errorHandler)
        })
        .catch(errorHandler)
}

const gameService = {
    getAll,
    getOne,
    add,
    getTopFive,
    upvote,
    editOne,
    comment,
}
export default gameService