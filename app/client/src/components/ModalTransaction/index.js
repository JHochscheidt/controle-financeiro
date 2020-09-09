import React, { useState } from 'react';
import Modal from 'react-modal';

import './style.css';

export default function ModalTransaction(isOpen) {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Exemplo Modal</h2>
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
