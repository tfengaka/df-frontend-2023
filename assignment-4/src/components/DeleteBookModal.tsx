'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { useBookContext } from '../context/BookContext';
import Button from './Button';

interface IDeleteBookModalProps {
  item: IBook;
}

function DeleteBookModal({ item }: IDeleteBookModalProps) {
  const { deleteBook } = useBookContext();
  const [isOpen, setOpen] = useState(false);

  const handleDeleteItem = () => {
    deleteBook(item.id);
    setOpen(false);
  };

  return (
    <>
      <Button className="px-[10px] py-[6px] bg-primary text-white hover:bg-primary_hover" onClick={() => setOpen(true)}>
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} className="max-w-[500px] max-h-[300px]">
        <h3 className="text-center text-xl mb-5 font-bold">Delete Book</h3>
        <p className="mx-0 my-auto font-semibold text-center leading-normal">
          Do you want to delete this
          <br />
          <span className="font-bold text-primary">{item.title}</span>
          <br />
          book from the database?
        </p>
        <div className="flex items-center justify-center mt-8 gap-x-10">
          <Button className="bg-primary text-white px-8 py-4" onClick={handleDeleteItem}>
            Delete
          </Button>
          <Button className="bg-secondary text-white px-8 py-4" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteBookModal;
