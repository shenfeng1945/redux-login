import {ADD_FLASH_MSG,DELETE_FLASH} from '../constants'
export const addFlashMsg = (msg) => ({
  type: ADD_FLASH_MSG,
  msg,
})
export const deleteFlashMsg = (id) => ({
  type: DELETE_FLASH,
  id,
})

