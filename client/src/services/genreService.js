import { db } from '../utils/firebase'
import errorHandler from '../utils/errorHandler'
import { toast } from 'react-toastify'

const getAll = async (query = '') => {
    let genres = await db.collection('genres')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .filter(x => x.name.toLowerCase().includes(query.toLowerCase()))
        )
        .catch(errorHandler)
    return genres
}

const getOne = async (id) => {
    let genre = await db.collection('genres')
        .doc(id)
        .get()
        .then(res => res = { id: res.id, ...res.data() })
        .catch(errorHandler)
    return genre
}

const add = (genre) => {
    db.collection('genres')
        .add(genre)
        .catch(errorHandler)
}

const upvote = (id, email) => {
    db.collection('genres')
        .doc(id)
        .get()
        .then(res => {
            if (res.data().usersUpvoted.includes(email)) throw toast.warning('You have already upvoted this genre.')
            res = { ...res.data(), upvotes: res.data().upvotes + 1 }
            res.usersUpvoted.push(email)
            return res
        })
        .then(upvotedGame => {
            db.collection('genres')
                .doc(id)
                .set(upvotedGame)
                .then(() => toast.success('Genre upvoted.'))
                .catch(errorHandler)
        })
        .catch(errorHandler)
}

const getTopFive = async () => {
    let genres = await db.collection('genres')
        .get()
        .then(res =>
            res.docs
                .map(x => x = { id: x.id, ...x.data() })
                .sort((a, b) => b.upvotes - a.upvotes)
                .slice(0, 5)
        )
        .catch(errorHandler)
    return genres
}

const editOne = (id, data) => {
    return db.collection('genres')
        .doc(id)
        .update(data)
        .catch(errorHandler)
}



const genreService = {
    getAll,
    getOne,
    add,
    getTopFive,
    upvote,
    editOne,
}
export default genreService