'use client';

import { useState } from 'react';
import Button from './Button';
import CreateBookForm from './Form/CreateBookForm';
import Modal from './Modal';

function CreateBook() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button className="px-4 py-3 bg-primary text-white" onClick={() => setOpen(true)}>
        Create New
      </Button>
      {isOpen && (
        <Modal onClose={() => setOpen(false)} className="max-w-[600px] max-h-[600px]">
          <h3 className="text-center text-xl font-bold text-secondary">Create New Book</h3>
          <CreateBookForm onFinished={() => setOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default CreateBook;
