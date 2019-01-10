import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../errores/containers/handle-error.js'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
            handleError: false,
        })
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media // media : media
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
                        this.state.modalVisible && // También se puede usar el Elvis Operator
                        <ModalContainer>
                            <Modal
                            handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay//Dejarlo así es lo mismo que ponerlo en true
                                    src={this.state.media.src}
                                    title={this.state.media.title}
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
    const categories = state.data.categories // esto tiene un montón de strings con ids
        .map((categoryId) => {
            return state.data.entities.categories[categoryId]
        }) 
    return {
        categories, // Esto es para mandarle más propiedades a Home
        search: state.search
    }
}

export default connect(mapStateToProps)(Home)