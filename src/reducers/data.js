export default function data(state, action) {//esto es un reducer
    switch (action.type){
        case 'SEARCH_VIDEO': {
            // action.payload.query
            let results = []
            if (action.payload.query) {
                state.data.categories.map((category) => {
                    return results.concat(
                        category.playlist.filter((item) => {
                            return item.author.toLowerCase().includes(action.payload.query.toLowerCase()) && results.push(item)
                        })
                    )
                })
            }
            return {
                ...state,
                search: results,
            }
        }
        case '': {
            return state
        }
        default:
            return state
    }
}