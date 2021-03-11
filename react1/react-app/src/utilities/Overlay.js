import React, {Component} from 'react';
import Modal from './../components/modal/Modal';
import './Overlay.css'

export default class Overlay extends Component {
    constructor(){
        super()
        if(Overlay.instance){
            return Overlay.instance;
        }
        this.state = {Modal: null};
        Overlay.instance = this;
    }
    showModal(){
        this.setState({Modal: true});
    }
    closeModal = () => {
        this.setState({Modal:null});
    }
    Modal(){
        if (this.state.Modal){
            return (
                <div className="Overlay">
                    <Modal close={this.closeModal} />
                </div>)
        }
        return null
    }
    render(){
         return (
            <>
                {this.Modal()}
            </>
            );
    }
}