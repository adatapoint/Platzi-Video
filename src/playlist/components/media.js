import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent {
  state = {
    author: 'Vince'
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }
  handleClick = (event) => { // Los arrow functions heredan el contexto de su padre, por lo que no es necesario el bind
    this.props.openModal(this.props.id) //Simplemente le enviamos una referencia del archivo
    // console.log(this.state.image)
    // this.setState({ // Así se cambia el estado de un componente.
    //   author: 'Ricargo Célis',
    // })
  }
  render() {

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            />
            <h3 className="Media-title">{this.props.title}</h3>
            <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired, // Se valida que es String, y se valida que sí exista y no venga vacío
  author: PropTypes.string,
  video: PropTypes.oneOf(['video', 'audio']) // Se valida que sea un valor entre los del array
}

export default Media;
