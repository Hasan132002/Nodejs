import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReadItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data using axios
    axios.get('http://localhost:3001/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h2>Read Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
            <div>
              <Link to={`/update/${item.id}`}>Update</Link>
              <Link to={`/delete/${item.id}`}>Delete</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadItems;
