import { toast } from 'react-toastify'

const errorHandler = (err) => {
    if(err.response) return toast.error(err.response.data.msg)
    return toast.error(err.message)
}

export default errorHandler