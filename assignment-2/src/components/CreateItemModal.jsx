import React, { useState } from "react";
import Modal from "./Modal";
import { useDataContext } from "../contexts/dataContext";

function CreateItemModal() {
	const { totalTopics, createItem } = useDataContext();
	const [isOpen, setOpen] = useState(false);

	const [formData, setFormData] = useState({
		title: "",
		author: "",
		topic: "",
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
			<Modal
				isOpen={isOpen}
				onClose={() => setOpen(false)}
				className="modal_add_item"
			>
				<h3>Create New Item</h3>
				<form id="create_form" onSubmit={onSubmitHandler}>
					<div className="form_field">
						<label htmlFor="title" className="form_label">
							Title
						</label>
						<input
							type="text"
							name="title"
							className="form_input input"
							required
							onChange={(e) => inputChangeHandler(e)}
						/>
					</div>
					<div className="form_field">
						<label htmlFor="author" className="form_label">
							Author
						</label>
						<input
							type="text"
							name="author"
							className="form_input input"
							required
							onChange={(e) => inputChangeHandler(e)}
						/>
					</div>
					<div className="form_field">
						<label htmlFor="topic" className="form_label">
							Topic
						</label>
						<select
							name="topic"
							className="form_select input"
							onChange={(e) => inputChangeHandler(e)}
						>
							<option
								className="form_select__default"
								defaultValue={null}
								hidden
							>
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
