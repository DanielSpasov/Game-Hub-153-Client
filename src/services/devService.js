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
        const response = await axios.get(`${db_uri}/devs/getAll${query}`)
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

const upvote = async (data, userID) => {
    try {
        const response = await axios.post(`${db_uri}/devs/upvote/${data._id}`, { data, userID })
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

const comment = async (devID, content, username) => {
    try {
        const response = await axios.post(`${db_uri}/devs/comment/${devID}`, { content, username })
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
}

export default functions