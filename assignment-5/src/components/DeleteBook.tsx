'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useBookContext } from '../context/BookContext';
import Button from './Button';
import Modal from './Modal';

interface IDeleteBookProps {
  item: IBook;
  onFinished?: () => void;
}

function DeleteBook({ item, onFinished }: IDeleteBookProps) {
  const { deleteBook } = useBookContext();
  const [isOpen, setOpen] = useState(false);

  const handleDeleteItem = () => {
    deleteBook(item.id);
    setOpen(false);
    toast.success('Book deleted successfully!');
    onFinished?.();
  };

  return (
    <>
      <Button className="px-[10px] py-[6px] bg-primary text-white hover:bg-primary_hover" onClick={() => setOpen(true)}>
        Delete
      </Button>
      {isOpen && (
        <Modal onClose={() => setOpen(false)} className="max-w-[500px] max-h-[300px]">
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
      )}
    </>
  );
}

export default DeleteBook;
