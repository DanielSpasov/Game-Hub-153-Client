import { db } from '../utils/firebase'
import { toast } from 'react-toastify'

import errorHandler from '../utils/errorHandler'

import gameService from './gameService'



const getAll = (query = '') => {
    return db.collection('devs')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .filter(x => x.orgName.toLowerCase().includes(query.toLowerCase()))
        )
        .catch(errorHandler)
}

const getOne = (id) => {
    return db.collection('devs')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
}

const add = (dev) => {
    db.collection('devs')
        .add(dev)
        .catch(errorHandler)
}

const upvote = (id, email) => {
    db.collection('devs')
        .doc(id)
        .get()
        .then(res => {
            if (res.data().usersUpvoted.includes(email)) throw toast.warning('You have already upvoted this developer.')
            res = { ...res.data(), upvotes: res.data().upvotes + 1 }
            res.usersUpvoted.push(email)
            return res
        })
        .then(upvotedGame => {
            db.collection('devs')
                .doc(id)
                .set(upvotedGame)
                .then(() => toast.success('Developer upvoted.'))
                .catch(errorHandler)
        })
        .catch(errorHandler)
}

const getTopFive = () => {
    return db.collection('devs')
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
    return db.collection('devs')
        .doc(id)
        .update(data)
        .catch(errorHandler)
}

const getGames = (id) => {
    return gameService.getAll()
        .then(games => games = games.filter(x => x.dev === id))
        .catch(errorHandler)
}

const comment = (commentContent, email, id) => {
    return db.collection('devs')
        .doc(id)
        .get()
        .then(res => {
            res = res.data()
            res.comments.push({ user: email, content: commentContent })
            return res
        })
        .then(data => {
            db.collection('devs')
                .doc(id)
                .update(data)
                .catch(errorHandler)
        })
        .catch(errorHandler)
}

const devService = {
    getAll,
    getOne,
    add,
    getTopFive,
    upvote,
    editOne,
    getGames,
    comment,
}
export default devService