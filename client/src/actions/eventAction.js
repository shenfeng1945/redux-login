import axios from 'axios'
export const createEvent = (title) => {
  return dispatch => {
    return axios.post('api/users/create',title)
  }
}
