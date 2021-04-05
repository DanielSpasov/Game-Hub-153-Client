import { toast, ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import devService from '../../../services/devService'

import errorHandler from '../../../utils/errorHandler'
import validator from '../../../utils/validator'

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
            .then(() => {
                toast.success('Dev edited. Redirecting to devs page.')
                setTimeout(() => history.push('/devs'), 2500)
            })
            .catch(errorHandler)
    }

    return (
        <div className="main-section">

            <h1>Add or Edit Information</h1>

            <div className="form-container">
                <form onSubmit={onAddGenreInfoSubmitHandler}>

                    <input
                        className="input-field"
                        type="text"
                        name="orgName"
                        placeholder="Organization Name"
                        defaultValue={dev?.orgName}
                        onChange={onOrgNameChangeHandler}
                    />
                    <input
                        className="input-field"
                        type="text"
                        name="imageUrl"
                        placeholder="Image Url"
                        defaultValue={dev?.imageUrl}
                        onChange={onImageUrlChangeHandler}
                    />

                    <button className="add-button">Edit Info</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddDevInfo