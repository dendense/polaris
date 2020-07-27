import React, { Component } from 'react'
import Button from 'elements/Button'
import Modal from 'elements/Modal'

export default class TimeLine extends Component {
    state = { show: false };

    showModal = e => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div>
                <Button
                    type="link"
                    className="btn btn-info text-white"
                    onClick={e => {this.showModal();}}
                    href={``}
                >
                    Click Here
                </Button>
                <Modal show={this.state.show}>Good Morning</Modal>
            </div>
        )
    }
}
