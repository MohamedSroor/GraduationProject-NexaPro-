import React, { useState } from "react";
import Model from "react-modal";

function AddPerson({ isOpen, onClose, onAddPerson }) {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name, jobTitle, image };
    // Call the onAddPerson function with the new person data
    onAddPerson(newPerson);
    // Clear form fields
    setName("");
    setJobTitle("");
    setImage(null);
    // Close the pop-up form
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Handle image preview or other actions if needed
    setImage(URL.createObjectURL(e.target.files[0]));
    setImage(file);
  };

  return (
    <Model isOpen={isOpen} onRequestClose={onClose} className="popUpForm">
      <div className="popUpForm-content">
        <h1>Add new member</h1>
        <form onSubmit={handleSubmit}>
          <span className="close" onClick={onClose}>
            &#10006;
          </span>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Job Title</p>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          <button type="submit" className="form-btn">
            Add Person
          </button>
        </form>
      </div>
    </Model>
  );
}

export default AddPerson;
