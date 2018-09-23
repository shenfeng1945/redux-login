import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import {SET_CURRENTUSER} from '../constants'
import jwtDecode from 'jwt-decode'

// 页面刷新后，axios添加请求头，就会失效,所以需要在index去添加
export const userLogin = (userData) => {
   return dispatch => {
       return axios.post('/api/users/login',userData).then(res=>{
           const jwtToken = res.data.token;
           localStorage.setItem('jwtToken',jwtToken)
           setAuthorizationToken(jwtToken);
           dispatch(setCurrentUser(jwtDecode(jwtToken)))
       })
   }
}
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENTUSER,
        user
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken')
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}

