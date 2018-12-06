import React from 'react'
import './modal.css'

function Modal(props) {
    return ( // Poner el button dentro del div significa que van ligados, y el uno aparece siempre que aparezca el otro.
        <div className="Modal">          
            {props.children}
            <button className="Modal-close"
            onClick={props.handleClick}/>
        </div>
    )
}

export default Modal;