import axios from 'axios'

import errorHandler from '../utils/errorHandler'

const db_uri = process.env.REACT_APP_DB_URI



const add = async (data, userID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/add`, { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`${db_uri}/devs/getAll?search=${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`${db_uri}/devs/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`${db_uri}/devs/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (devID, userID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/upvote/${devID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`${db_uri}/devs/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteDev = async (devID, userID) => {
    try {
        const response = await axios.get(`${db_uri}/devs/delete/${devID}`, { userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (devID, content, userID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/comment/${devID}`, { content, userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const authorizeEditor = async (userID, editorEmail, devID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/authorizeEditor/${devID}`, { userID, editorEmail })
        return response.data
    } catch (err) { errorHandler(err) }
}

const removeEditor = async (userID, editorID, devID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/removeEditor/${devID}`, { userID, editorID })
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
    deleteDev,
    comment,
    authorizeEditor,
    removeEditor,
}

export default functions