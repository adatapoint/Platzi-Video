import React from 'react';
import { render } from 'react-dom';
// import Media from './src/playlist/components/media'; 
import data from '../../src/api.json';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// console.log('Hola mundo!')
const app = document.getElementById('app')

// ReactDOM.render(que-voy-a-renderizar, donde-lo-voy-a-renderizar)
// const holaMundo = <h1>Hola Mundo!</h1>;
render(<Home data={data}/>, app);