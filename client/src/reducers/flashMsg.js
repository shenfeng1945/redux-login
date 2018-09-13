import { ADD_FLASH_MSG } from '../constants';
import shortid from 'shortid';
const flashMsg = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MSG:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.msg.type,
                    text: action.msg.text,
                }
            ]
        default:
            return state
    }
}

export default flashMsg;