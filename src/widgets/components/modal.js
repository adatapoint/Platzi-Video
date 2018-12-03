import React from 'react'
import './modal.css'

function Modal(props) {
    return ( // Poner el button dentro del div significa que van ligados, y el uno aparece siempre que aparezca el otro.
        <div className="Modal">
            Esto es un modal!
            
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal;