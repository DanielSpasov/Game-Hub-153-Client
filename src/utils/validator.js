import { toast } from 'react-toastify'

const validator = ({ title, image, description, videoUrl }) => {

    let dataIsValid = true

    if (title !== undefined) {
        if (title === '') { toast.error('Name is required'); return dataIsValid = false }
        if (title.length > 25) { toast.error('Name is too long.'); return dataIsValid = false }
    }

    if (image !== undefined) {
        if (!image) { toast.error('Image Url is required.'); return dataIsValid = false }
        let isValidUrl = /https?:\/\/.{0,}/g.test(image)
        if (!isValidUrl) { toast.error('Image Url is invalid.'); return dataIsValid = false }
    }

    if (description !== undefined) {
        if (description === '') { toast.error('Description is required.'); return dataIsValid = false }
        if (description.length < 10) { toast.error('Description is too short.'); return dataIsValid = false }
    }

    if (videoUrl !== '' && videoUrl !== undefined) {
        let videoUrlIsYoutubeUrl = videoUrl.slice(0, 32) === 'https://www.youtube.com/watch?v='
        if (!videoUrlIsYoutubeUrl) { toast.error('Not a valid youtube video url. A valid youtube video url looks like this: https://www.youtube.com/watch?v=LembwKDo1Dk'); return dataIsValid = false }
    }

    return dataIsValid

}

export default validator