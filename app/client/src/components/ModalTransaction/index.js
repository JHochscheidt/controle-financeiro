import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import './style.css';

Modal.setAppElement('#root');

export default function ModalTransaction(opened) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    openModal();
  }, [modalIsOpen]);
  function openModal() {
    setModalIsOpen(true);
    opened.opened(true);
  }
  function closeModal() {
    setModalIsOpen(false);
    opened.opened(false);
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Inclusão de Lançamento</h2>
        <button onClick={closeModal}>
          <span>X</span>
        </button>
        <form>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
          <input type="number" name="value" id="value" placeholder="Value" />
        </form>
      </Modal>
    </div>
  );
}
