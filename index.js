import React from 'react'
import { render } from 'react-dom'
import Media from './src/playlist/components/media'; 
// console.log('Hola mundo!')
const app = document.getElementById('app')

// ReactDOM.render(que-voy-a-renderizar, donde-lo-voy-a-renderizar)
const holaMundo = <h1>Hola Mundo!</h1>;
render(<Media type="video" title='¿Qué es responsive Design?' author='Vincent Restrepo' image='/images/covers/responsive.jpg' />, app);