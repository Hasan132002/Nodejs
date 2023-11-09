
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mysql = require('mysql2');
const db = require('./database'); 
const app = express();
const port = 8002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Fetch data from the MySQL database
    db.query('SELECT * FROM items where is_active=1', (err, results) => {
      if (err) {
        console.error('Database error:', err);
        res.status(500).send('Database error');
      } else {
        // Render the HTML template with the retrieved data
        res.render('index', { data: results });
      }
    });
  });
  

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });
  
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a new item
app.post('/items', (req, res) => {
    const { name, description,email } = req.body;
  
    db.query('INSERT INTO items (name, description,email) VALUES (?, ?)', [name, description,email], (err, results) => {
      if (!err) {
        res.send('Item created successfully');
      } else {
        res.status(500).send(err.message);
      }
    });
  });
  
  // Read all items
  app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
      if (!err) {
        res.send(results);
      } else {
        res.status(500).send(err.message);
      }
    });
  });
  
  // Read a specific item
  app.get('/items/:itemId', (req, res) => {
    const itemId = req.params.itemId;
  
    db.query('SELECT * FROM items WHERE id = ?', [itemId], (err, results) => {
      if (!err) {
        res.send(results[0]);
      } else {
        res.status(500).send(err.message);
      }
    });
  });
  

app.put('/items/:itemId', (req, res) => {
    const itemId = req.params.itemId;
     const { name, description } = req.body;
    console.log(req.body); 
         db.query('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, itemId], (err) => {

     if (!err) {
                res.send('Item updated successfully');
              
              } else {
                res.status(500).send(err.message);
              }
  });
});
  



  // Delete an item
//   app.delete('/items/:itemId', (req, res) => {
//     const itemId = req.params.itemId;
  
//     db.query('DELETE FROM items WHERE id = ?', [itemId], (err) => {
//       if (!err) {
//         res.send('Item deleted successfully');
//       } else {
//         res.status(500).send(err.message);
//       }
//     });
//   });
  

app.delete('/items/:itemId', (req, res) => {
    const itemId = req.params.itemId;
  
    // Update the 'is_active' column to 2 instead of physically deleting
    const sql = 'UPDATE items SET is_active = 2 WHERE id = ?';
    
    db.query(sql, [itemId], (err) => {
      if (!err) {
        res.send('Item marked as inactive successfully');
      } else {
        res.status(500).send(err.message);
      }
    });
  });
    

  app.get('/form', (req, res) => {
    res.render('form');
  });
  
  app.post('/submit', (req, res) => {
    const { name, email, contact, description } = req.body;
  
    // Insert the data into the database
    const sql = 'INSERT INTO items (name, email, contact_no, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, contact, description], (err) => {
      if (err) {
        console.error('Database error: ' + err);
        res.status(500).send('Database error');
      } else {
        res.send('Data saved successfully');
      }
    });
  });
  







  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  
