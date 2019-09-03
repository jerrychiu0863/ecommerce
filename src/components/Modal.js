import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="modal"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,.2)'
      }}
    >
      <div
        className="modal__container"
        style={{ width: '20vw', height: '20vh' }}
      >
        <p>Modal</p>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
