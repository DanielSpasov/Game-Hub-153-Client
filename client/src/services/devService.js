import { db } from '../utils/firebase'
import errorHandler from '../utils/errorHandler'
import { toast } from 'react-toastify'

const getAll = async (query = '') => {
    let devs = await db.collection('devs')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .filter(x => x.orgName.toLowerCase().includes(query.toLowerCase()))
        )
        .catch(errorHandler)
    return devs
}

const getOne = async (id) => {
    let dev = await db.collection('devs')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
    return dev
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

const getTopFive = async () => {
    let devs = await db.collection('devs')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .sort((a, b) => b.upvotes - a.upvotes)
                .slice(0, 5)
        )
        .catch(errorHandler)
    return devs
}

const editOne = (id, data) => {
    return db.collection('devs')
        .doc(id)
        .update(data)
        .catch(errorHandler)
}



const devService = {
    getAll,
    getOne,
    add,
    getTopFive,
    upvote,
    editOne,
}
export default devService