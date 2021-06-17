import axios from 'axios'

import errorHandler from '../utils/errorHandler'



const add = async (data, userID) => {
    try {
        const response = await axios.post('http://localhost:5153/games/add', { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`http://localhost:5153/games/getAll${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5153/games/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`http://localhost:5153/games/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (data, userID) => {
    try {
        const response = await axios.post(`http://localhost:5153/games/upvote/${data._id}`, { data, userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`http://localhost:5153/games/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteGame = async (gameID) => {
    try {
        const response = await axios.get(`http://localhost:5153/games/delete/${gameID}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (gameID, content, username) => {
    try {
        const response = await axios.post(`http://localhost:5153/games/comment/${gameID}`, { content, username })
        return response.data
    } catch (err) { errorHandler(err) }
}



const functions = {
    add,
    getAll,
    getOne,
    editOne,
    upvote,
    getTopFive,
    deleteGame,
    comment
}

export default functions