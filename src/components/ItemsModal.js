import React from 'react';
import Modal from 'react-modal';

const ItemsModal = (props) => ( 
   <Modal
    isOpen={!!props.handleOpenModal}
    contentLabel="Add Items"
    closeTimeoutMS={200}
    className="items-modal"
    >
      <h3>Add Items To Do to the List</h3>
      <button onClick={props.handleCloseModal}>OK</button>
    </Modal>
  )

export default ItemsModal;

