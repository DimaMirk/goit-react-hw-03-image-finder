import { Component } from 'react';

import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Must close modal');
      this.props.onClose();
    }
  };

  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.imageItem;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdrop}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
