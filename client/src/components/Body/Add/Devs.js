import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import devService from '../../../services/devService'
import errorHandler from '../../../utils/errorHandler'
import validator from '../../../utils/validator'

import './Add.css'

const AddDevs = () => {

    const history = useHistory()

    const onAddDevSubmitHandler = (e) => {
        e.preventDefault()

        let orgName = e.target.orgName.value
        let imageUrl = e.target.imageUrl.value

        validator({orgName, imageUrl})
        devService.add({ orgName, imageUrl, upvotes: 0, usersUpvoted: [] }).catch(errorHandler)
        history.push('/devs')
    }

    return (
        <div className="main-section">

            <h1>Add Developer</h1>

            <div className="items-container">
                <form onSubmit={onAddDevSubmitHandler}>

                    <input className="input-field" type="text" name="orgName" placeholder="Org Name" />
                    <input className="input-field" type="text" name="imageUrl" placeholder="Image Url" />

                    <button className="add-button">Add Developer</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddDevs