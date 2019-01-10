import schema from '../schemas/index'
import { fromJS } from 'immutable'

const initialState = fromJS({
    // ...data, // simplemente estoy descomponiendo data
    entities: schema.entities, // Yo ahora tengo entidades
    categories: schema.result.categories,
    search: '', // Le agrego a mi data un "search", una "búsqueda", que en momento será vacío
})

export default function data(state = initialState, action) {//esto es un reducer
    switch (action.type){
        case 'SEARCH_VIDEO': {
            // action.payload.query
            // let results = []
            // if (action.payload.query) {
            //     state.get('data').get('categories').map((category) => {
            //         return results.concat(
            //             category.playlist.filter((item) => {
            //                 return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
            //             })
            //         )
            //     })
            // }
            // return {
            //     ...state,
            //     search: results,
            // }
            return state.set('search', action.payload.query) // Estoy seteando un nuevo resultado de búsqueda al search (el que está en las initialState)
            // Eso devuelve un nuevo mapa de immutable, ya no afecta lo que teníamos.
        }
        case '': {
            return state
        }
        default:
            return state
    }
}