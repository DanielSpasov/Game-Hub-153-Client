

import errorHandler from '../../../utils/errorHandler'

import AlertBox from '../../AlertBox'



const EditAlert = ({ editAlert, setEditAlert }) => {

    
    const handleEditYes = async () => {
        try {
            console.log('i am editing whoo')
        } catch (err) { errorHandler(err) }
    }

    const handleEditNo = () => { setEditAlert('hide') }

    return (
        <AlertBox display={editAlert} yesHandler={handleEditYes} noHandler={handleEditNo} type="edit">
            <p>This is my edit alert</p>
        </AlertBox>
    )
}



export default EditAlert