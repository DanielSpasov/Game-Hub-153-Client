import { ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import devService from '../../services/devService'
import validator from '../../utils/validator'

import InputField from '../Common/InputField/InputField'

import './Add.css'

const AddDevs = () => {

    const history = useHistory()

    const onAddDevSubmitHandler = (e) => {
        e.preventDefault()

        let orgName = e.target.orgName.value
        let imageUrl = e.target.imageUrl.value

        validator({orgName, imageUrl})
        devService.add({ orgName, imageUrl, upvotes: 0, usersUpvoted: [], comments: [] })
        history.push('/devs')
    }

    return (
        <div className="main-section">

            <h1>Add Developer</h1>

            <div className="items-container">
                <form onSubmit={onAddDevSubmitHandler}>

                    <InputField name="orgName" placeholder="Org Name" />
                    <InputField name="imageUrl" placeholder="Image Url" />

                    <button className="add-button">Add Developer</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddDevs