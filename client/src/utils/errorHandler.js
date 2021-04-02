import { toast } from 'react-toastify'

const errorHandler = (err) => {
    return toast.error(err.message)
}

export default errorHandler