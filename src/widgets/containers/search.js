import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux'

class SearchContainer extends Component {
    state = {
        value: "Busca artistas, canciones y amigos" // Valor por defecto, pero es editable
    }
    handleSubmit = event => {
        // Para que la página no recargue hay que decírselo
        event.preventDefault();
        console.log(this.input.value, 'submit') // Aquí se puede mandar el POST con todos los datos de un formulario
        this.props.dispatch({ // Esto fue gracias a Connect, dado que puedo usar this.props.dispatch
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.input.value,
            }
        })
    }

    setInputRef = element => { //Funcion que recibe el elemento, que llega del input.
        this.input = element;
    }

    handleInputChange = event => {
        this.setState({
            value: this.input.value //.replace(' ', '-') este replace es para transformar cada cosa que la persona escriba, en cada cambio
        })
    }

    render(){
        return (
            <Search
                setRef={this.setInputRef} // Con esto setteo ese parámetro, que es un parámetro del input del formulario.
                handleSubmit={this.handleSubmit} // This es que está definido aquí. Props es que está definido en el padre.
                handleChange={this.handleInputChange} //Esto maneja cualquier cambio en el campo.
                value={this.state.value} // para enviarle el valor que obtuve en el formulario.
            />
        )
    }
}

export default connect()(SearchContainer); // Esto es para que tenga acceso al dispatch