import axios from 'axios'

import errorHandler from '../utils/errorHandler'

const db_uri = process.env.REACT_APP_DB_URI



const add = async (data, userID) => {
    try {
        const response = await axios.post(`${db_uri}/genres/add`, { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`${db_uri}/genres/getAll${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`${db_uri}/genres/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`${db_uri}/genres/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (genreID, userID) => {
    try {
        const response = await axios.post(`${db_uri}/genres/upvote/${genreID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`${db_uri}/genres/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteGenre = async (genreID, userID) => {
    try {
        const response = await axios.get(`${db_uri}/genres/delete/${genreID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (genreID, content, username) => {
    try {
        const response = await axios.post(`${db_uri}/genres/comment/${genreID}`, { content, username })
        return response.data
    } catch (err) { errorHandler(err) }
}

const authorizeEditor = async (userID, editorEmail, genreID) => {
    try {
        const response = await axios.post(`${db_uri}/genres/authorizeEditor/${genreID}`, { userID, editorEmail })
        return response.data
    } catch (err) { errorHandler(err) }
}

const removeEditor = async (userID, editorID, genreID) => {
    try {
        const response = await axios.post(`${db_uri}/genres/removeEditor/${genreID}`, { userID, editorID })
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
    deleteGenre,
    comment,
    authorizeEditor,
    removeEditor,
}

export default functions