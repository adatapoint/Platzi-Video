import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../errores/containers/handle-error.js'
import VideoPlayer from '../../player/containers/video-player'

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
    handleOpenModal = () => {
        this.setState({
            modalVisible: true,
        })
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <VideoPlayer
                    autoplay//Dejarlo así es lo mismo que ponerlo en true
                    />
                    <Categories categories={this.props.data.categories} 
                    handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisible && // También se puede usar el Elvis Operator
                        <ModalContainer>
                            <Modal
                            handleClick={this.handleCloseModal}>
                                <h1>Nuestro Portal!!</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
            
        )
    }
}

export default Home