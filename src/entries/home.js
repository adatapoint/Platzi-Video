import React from 'react';
import { render } from 'react-dom';
// import Media from './src/playlist/components/media'; 
// import data from '../../src/api.json';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// console.log('Hola mundo!')
import reducer from '../reducers/index'
// import data from '../schemas/index'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable'

import { createStore } from 'redux'

// const initialState = {
//     data: { // ESTE ES EL PRIMER REDUCER
//         // ...data, // simplemente estoy descomponiendo data
//         entities: data.entities, // Yo ahora tengo entidades
//         categories: data.result.categories,
//         search: [], // Le agrego a mi data un "search", una "búsqueda", que en momento será vacío
//     },
//     modal: { // ESTE ES EL SEGUNDO REDUCER
//         visibility: false,
//         mediaId: null,
//     }
// }
    

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer, // reducer
    map(), // initialState -> No se le manda nada porque ya tengo el 
    enhancer, // enhancer
)
// console.log(data)
// console.log(data)
// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que-voy-a-renderizar, donde-lo-voy-a-renderizar)
// const holaMundo = <h1>Hola Mundo!</h1>;

render(
    <Provider store={store}>
        <Home />
    </Provider>, homeContainer);