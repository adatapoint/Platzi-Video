import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../errores/containers/handle-error.js'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
import { List as list } from 'immutable'

class Home extends Component {
    // state = {
    //     modalVisible: false, // Ya el estado no lo manejo de aquí sino de redux
    // }
    handleCloseModal = (event) => {
        // this.setState({
        //     modalVisible: false,
        //     handleError: false,
        // })
        this.props.dispatch({
            type: 'CLOSE_MODAL',
        })
    }
    handleOpenModal = (id) => {
        // this.setState({
        //     modalVisible: true,
        //     media // media : media
        // })
        this.props.dispatch({
            type: 'OPEN_MODAL',
            payload: {
                mediaId: id,
            }
        })
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related/>

                    <Categories categories={this.props.categories} 
                    handleOpenModal={this.handleOpenModal}
                    search={this.props.search}/>
                    {
                        // this.state.modalVisible && // También se puede usar el Elvis Operator
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal
                            handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay//Dejarlo así es lo mismo que ponerlo en true
                                    id={this.props.modal.get('mediaId')}
                                    // src={this.state.media.src}
                                    // title={this.state.media.title}
                                /> 
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
            
        )
    }
}

function mapStateToProps(state, props) { // Como su nombre lo dice, mapea el estado a las props, que es lo mismo que llenar las propiedades desde el estado
    // const categories = state.data.categories // esto tiene un montón de strings con ids
    const categories = state.get('data').get('categories')
        .map((categoryId) => {
            return state.get('data').get('entities').get('categories').get(categoryId)
        }) 
        let searchResults = list() // Ya no es un array [] sino una lista de immutable
        const search = state.get('data').get('search')
        if (search){
            const mediaList = state.get('data').get('entities').get('media')
            searchResults = mediaList.filter((item) => (
                item.get('author').toLowerCase().includes(search.toLowerCase())
            )).toList() // toList() es para que esto que es un mapa se convierta en una lista, para que sea más fácil plasmarlo en el dom
        }
    return {
        categories, // Esto es para mandarle más propiedades a Home
        search: searchResults,
        modal: state.get('modal'),
    }
}

export default connect(mapStateToProps)(Home)