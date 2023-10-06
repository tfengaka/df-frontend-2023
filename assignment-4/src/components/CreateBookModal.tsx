'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { useBookContext } from '../context/BookContext';
import TextField from './TextField';
import Button from './Button';

function CreateBookModal() {
  const { totalTopics, createBook } = useBookContext();
  const [isOpen, setOpen] = useState(false);

  const [formData, setFormData] = useState<IFormCreateBook>({
    title: '',
    author: '',
    topic: '',
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createBook(formData);
    setOpen(false);
  };

  return (
    <>
      <Button className="px-4 py-3 bg-primary text-white" onClick={() => setOpen(true)}>
        Add Book
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} className="max-w-[600px] max-h-[600px]">
        <h3 className="text-center text-xl font-bold text-secondary">Create New Item</h3>
        <form id="create_form" onSubmit={onSubmitHandler} className="flex flex-col gap-y-4">
          <TextField title="Title" name="title" required onChange={(e) => inputChangeHandler(e)} />
          <TextField title="Author" name="author" required onChange={(e) => inputChangeHandler(e)} />
          <div className="flex flex-col gap-y-2">
            <span className="text-[15px] font-bold">Topic</span>
            <select
              name="topic"
              className="text-sm font-semibold p-2 rounded-md outline-none border-2 border-[#acbbcf] transition-colors hover:border-primary focus:border-primary"
              onChange={(e) => inputChangeHandler(e)}
            >
              <option className="font-semibold text-sm text-[#535f70]" defaultValue={undefined} hidden>
                Select a topic
              </option>
              {totalTopics &&
                totalTopics.length > 0 &&
                totalTopics.map((topic, index) => (
                  <option key={index} value={topic} className="font-semibold text-sm text-secondary">
                    {topic}
                  </option>
                ))}
            </select>
          </div>
          <Button type="submit" className="px-4 py-3 bg-primary text-white w-full mt-2">
            Create Item
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default CreateBookModal;
