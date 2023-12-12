const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node',
});

db.connect();

app.use(cors());
app.use(bodyParser.json());

// Create a new item
app.post('/items', (req, res) => {
    const { name, description } = req.body;
    console.log('Received request:', name, description); // Add this line
    const query = 'INSERT INTO crud (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err); // Add this line
        throw err;
      }
      console.log('Inserted into database:', result.insertId); // Add this line
      res.json({ id: result.insertId });
    });
  });
  
// Get all items
app.get('/items', (req, res) => {
  const query = 'SELECT * FROM crud';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Get a specific item
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM crud WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Update an item
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    console.log('Received update request for item ID:', id); // Add this line
    console.log('Updated data:', name, description); // Add this line
    const query = 'UPDATE crud SET name = ?, description = ? WHERE id = ?';
    db.query(query, [name, description, id], (err) => {
      if (err) {
        console.error('Error updating item:', err);
        throw err;
      }
      res.json({ message: 'Item updated successfully' });
    });
  });
  

// Delete an item
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM crud WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Item deleted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
