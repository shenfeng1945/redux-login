import {SET_CURRENTUSER} from '../constants'
import isEmpty from 'lodash/isEmpty'
const initState = {
    isAuthorization: false,
    user: {}
}
const auth = (state = initState, action = {}) => {
    switch (action.type) {
        case SET_CURRENTUSER:
          return {
            isAuthorization: !isEmpty(action.user),
            user: action.user
          }
        default: return state;
    }
}
export default auth;