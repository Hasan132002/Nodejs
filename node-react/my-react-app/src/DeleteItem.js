// DeleteItem.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteItem = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate to manage navigation

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/items/${id}`);
      console.log(response.data);
      // Handle success
      // Redirect to the view page or any other page
      navigate('/read'); // Change '/read' to the desired path
    } catch (error) {
      console.error('Error deleting item:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteItem;
