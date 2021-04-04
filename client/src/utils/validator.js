import { toast } from 'react-toastify'

const validator = ({
    title,
    imageUrl,
    videoUrl,
    orgName,
    name,
}) => {

    if (title !== undefined) {
        if (title === '') throw toast.error('Title is required.')
        if (title.length > 25) throw toast.error('Title is too long.')
    }

    if (orgName !== undefined) {
        if (orgName === '') throw toast.error('Organization name is required.')
        if (orgName.length > 25) throw toast.error('Organization name is too long.')
    }

    if (name !== undefined) {
        if (name === '') throw toast.error('Genre name is required.')
        if (name.length > 25) throw toast.error('Genre name is too long.')
    }

    if (imageUrl !== undefined) {
        let imageUrlIsHttp = imageUrl.slice(0, 7) === 'http://'
        let imageUrlIsHttps = imageUrl.slice(0, 8) === 'https://'
        if (!imageUrl) throw toast.error('Image address is required.')
        if (!imageUrlIsHttp && !imageUrlIsHttps) throw toast.error('Invalid image address.')
    }

    if (videoUrl !== undefined) {
        let videoUrlIsYoutubeUrl = videoUrl.slice(0, 32) === 'https://www.youtube.com/watch?v='
        if (!videoUrlIsYoutubeUrl) throw toast.error('Not a valid youtube video url. A valid youtube video url looks like this: https://www.youtube.com/watch?v=LembwKDo1Dk')
    }

}

export default validator