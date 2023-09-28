import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';
import Modal from './Modal';

function CreateItemModal() {
  const { totalTopics, createItem } = useBookContext();
  const [isOpen, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    topic: '',
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createItem(formData);
    setOpen(false);
  };

  return (
    <>
      <button className="btn add" onClick={() => setOpen(true)}>
        Add Book
      </button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} className="modal_add_item">
        <h3>Create New Item</h3>
        <form id="create_form" onSubmit={onSubmitHandler}>
          <div className="form_field">
            <span className="form_label">Title</span>
            <input
              id="title"
              type="text"
              name="title"
              className="form_input input"
              required
              onChange={(e) => inputChangeHandler(e)}
            />
          </div>
          <div className="form_field">
            <span className="form_label">Author</span>
            <input
              type="text"
              name="author"
              className="form_input input"
              required
              onChange={(e) => inputChangeHandler(e)}
            />
          </div>
          <div className="form_field">
            <span className="form_label">Topic</span>
            <select name="topic" className="form_select input" onChange={(e) => inputChangeHandler(e)}>
              <option className="form_select__default" defaultValue={undefined} hidden>
                Select a topic
              </option>
              {totalTopics &&
                totalTopics.length > 0 &&
                totalTopics.map((topic, index) => (
                  <option key={index} value={topic}>
                    {topic}
                  </option>
                ))}
            </select>
          </div>
          <button type="submit" className="form_field btn create">
            Create Item
          </button>
        </form>
      </Modal>
    </>
  );
}

export default CreateItemModal;
