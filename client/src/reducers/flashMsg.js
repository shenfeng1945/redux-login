import { ADD_FLASH_MSG, DELETE_FLASH } from '../constants';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex'
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
            ];
        case DELETE_FLASH: 
        const index = findIndex(state,{id:action.id});
        return [
            ...state.slice(0,index),
            ...state.slice(index+1)
        ]
        default:
            return state
    }
}

export default flashMsg;