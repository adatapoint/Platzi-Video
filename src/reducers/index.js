import data from './data'
import modal from './modal'

// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
    data, //data: data
    modal //modal: modal
})

export default rootReducer