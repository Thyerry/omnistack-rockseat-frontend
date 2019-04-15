import axios from 'axios'

const api = axios.create({
    baseURL: 'https://thyerry-omnistack-backend.herokuapp.com',
})

export default api