import { useContext, useEffect, useState } from 'react'

import UserContext from '../../../contexts/UserContext'

import InfoBox from '../../InfoBox'



const ButtonsBox = ({ isCreator, editors, handleUpvote, handleDelete, handleEdit }) => {

    const { userData } = useContext(UserContext)
    const [isEditor, setIsEditor] = useState(false)

    useEffect(() => {

        if (editors && userData.user) {
            let isAuthorized = isCreator ? true : editors.includes(userData.user.id)
            setIsEditor(isAuthorized)
        }

    }, [editors, isCreator, userData.user])

    return (
        <InfoBox title="Functions">

            <button className="icon-btn" onClick={handleUpvote}>
                <i className="fas fa-arrow-alt-circle-up"></i>
            </button>

            {isCreator ?
                <button className="icon-btn">
                    <i className="fas fa-plus-circle"></i>
                </button> : null}

            {isEditor ?
                <button className="icon-btn" onClick={handleEdit}>
                    <i className="fas fa-pen-square"></i>
                </button> : null}

            {isCreator ?
                <button className="icon-btn" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button> : null}

        </InfoBox >
    )
}

export default ButtonsBox