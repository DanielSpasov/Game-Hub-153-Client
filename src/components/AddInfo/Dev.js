import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import devService from '../../services/devService'

import InputField from '../Common/InputField/InputField'

import errorHandler from '../../utils/errorHandler'
import validator from '../../utils/validator'

import './AddInfo.css'

const AddDevInfo = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [dev, setDev] = useState(null)

    const [orgName, setOrgName] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        devService.getOne(match.params.devId)
            .then(res => setDev(res))
            .then(() => {
                setOrgName(dev?.orgName)
                setImageUrl(dev?.imageUrl)
            })
            .catch(errorHandler)
    }, [match.params.devId, dev?.orgName, dev?.imageUrl])

    const onOrgNameChangeHandler = (e) => setOrgName(e.target.value)
    const onImageUrlChangeHandler = (e) => setImageUrl(e.target.value)

    const onAddGenreInfoSubmitHandler = (e) => {
        e.preventDefault()

        validator({ orgName, imageUrl })
        devService.editOne(match.params.devId, { orgName, imageUrl })
            .then(() => history.push(`/devs/${match.params.devId}`))
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddGenreInfoSubmitHandler}>

                    <InputField name="orgName" placeholder="Organiztion Name" value={dev?.orgName} onChangeHandler={onOrgNameChangeHandler} />
                    <InputField name="imageUrl" placeholder="Image Url" value={dev?.imageUrl} onChangeHandler={onImageUrlChangeHandler} />

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddDevInfo