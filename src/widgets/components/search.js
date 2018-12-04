import React from 'react'
import './search.css'

const Search = (props) => ( // Si un componente no tiene estado (es un dumb) entonces tiene que tener props para poder  hacer el manejo.
    <form 
        className="Search"
        onSubmit={props.handleSubmit}>
        <input 
            ref={props.setRef}
            type="text"
            className="Search-input"
            placeholder="Busca tu video favorito"
            name='search'
            // defaultValue="Peerrra!!!" // Un valor que se muestra y se deja cambiar
            onChange={props.handleChange} // Envia el onChange para que lo maneje el padre.
            value={props.value}
        />
    </form>
)

export default Search;