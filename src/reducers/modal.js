import { fromJS } from 'immutable'

const initialState = fromJS({
    visibility: false,
    mediaId: null,
})


export default function modal(state = initialState, action) {// = {visibility: false, mediaId: null}, action){ //Eso que está definido es el estado inicial.
    switch (action.type){
        case 'OPEN_MODAL': {
            // return state.set('visibility', true).set('id', 1) se puede hacer esto o se puede mandar...
            return state.merge({
                'visibility': true,
                mediaId: action.payload.mediaId,
            })
        }
        case 'CLOSE_MODAL': {
            return state.set('visibility', false)
        }
        default:
            return state
    }
}