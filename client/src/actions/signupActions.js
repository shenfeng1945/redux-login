import axios from 'axios';
export const userSignup = (userData) => {
    return dispatch => {
        return axios.post('/api/users/signup', userData)
    }
}
export const userIdentify = (identify) => {
    return dispatch => {
        return axios.get(`/api/users/${identify}`)
    }
}

