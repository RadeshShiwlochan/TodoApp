import React from 'react';
import Modal from 'react-modal';

const ItemsModal = (props) => (
    <Modal
      isOpen={props.switchOnOff}
      contentLabel="Add Items"
    >
      <h3>Add Items To Do to the List</h3>
      <button onClick={props.addItemsToList}>
        Done Adding Items to List
      </button>
    </Modal>
)

export default ItemsModal;

