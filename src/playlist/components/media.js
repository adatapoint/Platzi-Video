import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css';

class Media extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: props.author
    }
  }
  handleClick = (event) => { // Los arrow functions heredan el contexto de su padre, por lo que no es necesario el bind
    // console.log(this.state.image)
    this.setState({
      author: 'Ricargo Célis',
    })
  }
  render() {
    
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.image}
            alt=""
            width={260}
            height={160}
            />
            <h3 className="Media-title">{this.props.title}</h3>
            <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired, // Se valida que es String, y se valida que sí exista y no venga vacío
  author: PropTypes.string,
  video: PropTypes.oneOf(['video', 'audio']) // Se valida que sea un valor entre los del array
}

export default Media;