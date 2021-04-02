import { ToastContainer, toast } from 'react-toastify'

import devService from '../../../services/devService'

import './AddDevs.css'

const AddDevs = ({
    history
}) => {

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
        <div className="devs-section">

            <div className="devs-nav-container" >
                <h1>Add Developer</h1>
            </div>

            <div className="devs-container">
                <form onSubmit={onAddDevSubmitHandler}>

                    <input className="add-game-field" type="text" name="orgName" placeholder="Org Name" />
                    <input className="add-game-field" type="text" name="imageUrl" placeholder="Image Url" />

                    <button className="add-dev-button">Add Developer</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddDevs