const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mysql = require('mysql2');
const methodOverride = require('method-override');

const app = express();
const port = 8002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.render('demo', { data: results });
    }
  });
});

app.get('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.query('SELECT * FROM items WHERE id = ?', [itemId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.render('show', { item: results[0] });
    }
  });
});

app.post('/items', (req, res) => {
  const { name, description, contact_no } = req.body;

  db.query('INSERT INTO items (name, description, contact_no) VALUES (?, ?, ?)', [name, description, contact_no], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.redirect('/');
    }
  });
});

app.put('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const { name, description, contact_no } = req.body;

  db.query('UPDATE items SET name = ?, description = ?, contact_no = ? WHERE id = ?', [name, description, contact_no, itemId], (err) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.redirect('/');
    }
  });
});

app.delete('/items/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  db.query('DELETE FROM items WHERE id = ?', [itemId], (err) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.redirect('/');
    }
  });
});

app.get('/forms', (req, res) => {
  res.render('form');
});

app.get('/items/:itemId/edit', (req, res) => {
  const itemId = req.params.itemId;

  db.query('SELECT * FROM items WHERE id = ?', [itemId], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.render('edit', { item: results[0] });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
