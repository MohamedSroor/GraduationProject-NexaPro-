import React, { useState } from "react";
import Model from "react-modal";

function SendtaskPopup({ isOpen, onClose, onSendtask }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    // Call the onAddPerson function with the new person data
    onSendtask(newTask);
    // Clear form fields
    setDescription("");
    setTitle("");
    // Close the pop-up form
    onClose();
  };

  return (
    <Model
      isOpen={isOpen}
      onRequestClose={onClose}
      className="SendTaskpopUpForm"
    >
      <div className="SendTaskpopUpForm-content">
        <h1>Send New Task</h1>
        <form onSubmit={handleSubmit}>
          <span className="close" onClick={onClose}>
            &#10006;
          </span>
          <label>
            <p>Title</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Description</p>
            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="form-btn">
            Send Task
          </button>
        </form>
      </div>
    </Model>
  );
}

export default SendtaskPopup;
