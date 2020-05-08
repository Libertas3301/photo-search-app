import { combineReducers } from 'redux'

export function queryDispatch(state = '', action) {
    switch (action.type) {
        case 'TAKE_QUERY':
            return {
                val: state
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({ queryDispatch })

export default rootReducer