import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/items', { name, description });
      console.log(response.data);
      // Handle success or navigate to a different page
    } catch (error) {
      console.error('Error creating item:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create Item</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateItem;
