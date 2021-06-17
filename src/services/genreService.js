import axios from 'axios'

import errorHandler from '../utils/errorHandler'



const add = async (data, userID) => {
    try {
        const response = await axios.post('http://localhost:5153/genres/add', { data, userID })
        return response
    } catch (err) { errorHandler(err) }
}

const getAll = async (query = '') => {
    try {
        const response = await axios.get(`http://localhost:5153/genres/getAll${query}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const getOne = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5153/genres/getOne/${id}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const editOne = async (id, data) => {
    try {
        const response = await axios.post(`http://localhost:5153/genres/editOne/${id}`, { data })
        return response.data
    } catch (err) { errorHandler(err) }
}

const upvote = async (data, userID) => {
    try {
        const response = await axios.post(`http://localhost:5153/genres/upvote/${data._id}`, { data, userID })
        return response.data
    } catch (err) { errorHandler(err) }
}

const getTopFive = async () => {
    try {
        const response = await axios.get(`http://localhost:5153/genres/topFive`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const deleteGenre = async (genreID) => {
    try {
        const response = await axios.get(`http://localhost:5153/genres/delete/${genreID}`)
        return response.data
    } catch (err) { errorHandler(err) }
}

const comment = async (genreID, content, username) => {
    try {
        const response = await axios.post(`http://localhost:5153/genres/comment/${genreID}`, { content, username })
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
}

export default functions