import { ToastContainer, toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import devService from '../../../services/devService'

import './Add.css'

const AddDevs = () => {

    const history = useHistory()

    const onAddDevSubmitHandler = (e) => {
        e.preventDefault()

        let orgName = e.target.orgName.value
        let imageUrl = e.target.imageUrl.value

        let imageUrlIsHttp = imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = imageUrl.slice(0, 8) === 'https://'

        if (!orgName) return toast.error('Organization name is required.')
        if (orgName > 25) return toast.error('Organization name cannot be more than 25 symbols.')
        if (!imageUrl) return toast.error('Iamge address is required.')
        if (!imageUrlIsHttp && !imageUrlIsHttps) return toast.error('Invalid image address.')

        devService.add({ orgName, imageUrl, upvotes: 0, usersUpvoted: [] })
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