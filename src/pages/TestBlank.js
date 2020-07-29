import React, { Component } from 'react'
import Button from 'elements/Button';
import Modal from 'elements/Modal';

export default class TimeLine extends Component {
    state = { show: false };
    showModal = () => {
        this.setState({ show: true })
    }
    hideModal = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <div>
                <h1>Modal Button</h1>
                <Modal 
                    show={this.state.show} 
                    handleClose={this.hideModal}
                    headModal="SignUp"
                >
                    <p>I'm a modal Modal Component</p>
                </Modal>
                <Button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.showModal}
                    href={``}
                >
                    Sign Up
                </Button>
            </div>
        );
    }
}
