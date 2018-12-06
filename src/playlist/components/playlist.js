import React from 'react'
import Media from './media';
import './playlist.css'

function Playlist(props) { // Componente funcional porque es una función
  console.log(props.data);
  return (
      <div className="Playlist">
        { 
            props.playlist.map((item) => {
                return <Media openModal={props.handleOpenModal} {...item} key = {item.id} />
            })
          }
      </div>
    )
}

export default Playlist

// Presentational -> Concentrados en mostrar cosas, props, atributos, etc. En el 99% de los casos son componentes funcionales, de resto pureComponents
// Los purecomponents ya definen el update del ciclo de vida.


// Containers -> Concentrados en funcionamiento. Importante: ciclo de vida. Obvio que tienen estado.
// Contienen otros containers y componentes de UI -> No tienen estilos ni className. Sólo se proveen de una jerarquía.
// Este es el que le dice al presentacional lo que tiene que mostrar.
