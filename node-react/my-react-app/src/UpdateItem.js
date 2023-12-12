import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import useParams and useNavigate
import axios from 'axios';

const UpdateItem = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();  // Use useNavigate for navigation

  useEffect(() => {
    // Fetch the existing item data when the component mounts
    axios.get(`http://localhost:3001/items/${id}`)
      .then(response => {
        const { name, description } = response.data;
        setName(name);
        setDescription(description);
      })
      .catch(error => {
        console.error('Error fetching item for update:', error);
      });
  }, [id]);
  
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/items/${id}`, { name, description });
      console.log(response.data);
      // Handle success
      // Redirect to the read page or any other page
      navigate('/read');  // Change '/read' to the desired path
    } catch (error) {
      console.error('Error updating item:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateItem;
