import axios from 'axios'

import errorHandler from '../utils/errorHandler'



const add = async (data, userID) => {
    try {
        const response = await axios.post('http://localhost:5153/devs/add', { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`http://localhost:5153/devs/getAll${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5153/devs/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`http://localhost:5153/devs/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (data, userID) => {
    try {
        const response = await axios.post(`http://localhost:5153/devs/upvote/${data._id}`, { data, userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`http://localhost:5153/devs/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteDev = async (devID) => {
    try {
        const response = await axios.get(`http://localhost:5153/devs/delete/${devID}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (devID, content, username) => {
    try {
        const response = await axios.post(`http://localhost:5153/devs/comment/${devID}`, { content, username })
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