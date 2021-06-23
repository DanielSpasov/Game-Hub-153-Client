import { useContext, useEffect, useState } from 'react'

import UserContext from '../../../contexts/UserContext'

import InfoBox from '../../InfoBox'



const ButtonsBox = ({ isDisabled, itemCreator, editors, handleUpvote, handleDelete, handleEdit, handleEditors }) => {

    const { userData } = useContext(UserContext)

    const [isCreator, setIsCreator] = useState(false)
    const [isEditor, setIsEditor] = useState(false)

    useEffect(() => {

        if (editors && userData.user) {
            setIsCreator(userData.user.id === itemCreator)
            let isAuthorized = isCreator ? true : editors.includes(userData.user.id)
            for (let kvp of editors) {
                if (kvp._id === userData.user.id) isAuthorized = true
            }
            setIsEditor(isAuthorized)
        }

    }, [editors, isCreator, userData.user, itemCreator])

    return (
        <InfoBox title="Functions">

            <button id="upvote" className="icon-btn" onClick={handleUpvote} disabled={isDisabled}>
                <i className="fas fa-arrow-alt-circle-up"></i>
            </button>

            {isCreator ?
                <button className="icon-btn" onClick={handleEditors}>
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