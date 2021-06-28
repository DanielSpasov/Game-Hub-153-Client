import axios from 'axios'

import errorHandler from '../utils/errorHandler'

const db_uri = process.env.REACT_APP_DB_URI



const add = async (data, userID) => {
    try {
        const response = await axios.post(`${db_uri}/games/add`, { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`${db_uri}/games/getAll?search=${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`${db_uri}/games/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`${db_uri}/games/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (gameID, userID) => {
    try {
        const response = await axios.post(`${db_uri}/games/upvote/${gameID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`${db_uri}/games/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteGame = async (gameID, userID) => {
    try {
        const response = await axios.post(`${db_uri}/games/delete/${gameID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (gameID, content, userID) => {
    try {
        const response = await axios.post(`${db_uri}/games/comment/${gameID}`, { content, userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const authorizeEditor = async (userID, editorEmail, gameID) => {
    try {
        const response = await axios.post(`${db_uri}/games/authorizeEditor/${gameID}`, { userID, editorEmail })
        return response.data
    } catch (err) { errorHandler(err) }
}

const removeEditor = async (userID, editorID, gameID) => {
    try {
        const response = await axios.post(`${db_uri}/games/removeEditor/${gameID}`, { userID, editorID })
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
    comment,
    authorizeEditor,
    removeEditor,
}

export default functions