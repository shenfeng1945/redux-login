import axios from 'axios'
export const userLogin = (userData) => {
   return dispatch => {
       return axios.post('/api/users/login',userData)
   }
}
