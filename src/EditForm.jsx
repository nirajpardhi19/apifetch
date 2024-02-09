// EditForm.js

import React, { useState } from 'react';
import './App.css';

function EditForm({ user, onSave, onClose }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <div className="form-container">
      <h2>Edit User</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={editedUser.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={editedUser.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={editedUser.phone} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input type="text" id="website" name="website" value={editedUser.website} onChange={handleChange} />
      </div>
      <div className="form-group">
        <button type="button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default EditForm;
