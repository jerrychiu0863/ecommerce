import React, { Component } from 'react';
import '../css/Modal.css';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  el = document.createElement('div');
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="Modal" onClick={this.props.closeModal}>
        <div onClick={e => e.stopPropagation()} className="Modal__container">
          <p>Please sing up to add item to your cart!</p>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
