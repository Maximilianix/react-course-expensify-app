import React from 'react';
import Modal from 'react-modal';

export default class ConfirmRemoveExpense extends React.Component {

    onClose = () => {
        this.props.onClose();
    };

    render() {
        Modal.setAppElement('#app');
        if (!this.props.show) {
            return null;
        }
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
            }
        };

        return (
            <Modal
                isOpen={this.props.show}
                onRequestClose={this.onClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>Are you sure you want to remove this expense?</div>
                <button className="button button--danger" onClick={this.props.onConfirm}>Remove</button>
                <button className="button button--secondary" onClick={this.onClose}>Cancel</button>
            </Modal>
        )
    }
}