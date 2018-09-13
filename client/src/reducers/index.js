import {combineReducers} from 'redux'

import auth from './auth'
import flashMsg from './flashMsg'

export default combineReducers({
    auth,
    flashMsg,
})