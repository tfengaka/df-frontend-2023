import React, { useState } from 'react';
import Modal from './Modal';
import { useBookContext } from '../context/BookContext';

interface IDeleteItemModalProps {
  item: IBook;
}

function DeleteItemModal({ item }: IDeleteItemModalProps) {
  const { deleteItem } = useBookContext();

  const [isOpen, setOpen] = useState(false);

  const handleDeleteItem = () => {
    deleteItem(item.id);
    setOpen(false);
  };

  return (
    <>
      <button className="btn del" onClick={() => setOpen(true)}>
        Delete
      </button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} className="modal_del_item">
        <h3>Delete Item</h3>
        <p>
          Do you want to delete this
          <br />
          <strong>{item.title}</strong>
          <br />
          item from the database?
        </p>
        <div className="modal_del_item btn_panel">
          <button className="btn target" onClick={handleDeleteItem}>
            Delete
          </button>
          <button className="btn cancel" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteItemModal;
