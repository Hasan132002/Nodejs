// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateItem from './CreateItem';
import ReadItems from './ReadItems';
import UpdateItem from './UpdateItem';
import DeleteItem from './DeleteItem';

const AppRoutes = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
        </ul>
      </nav>

      <Routes>
  <Route path="/create" element={<CreateItem />} />
  <Route path="/read" element={<ReadItems />} />
  <Route path="/update/:id" element={<UpdateItem />} />
  <Route path="/delete/:id" element={<DeleteItem />} />
</Routes>

    </Router>
  );
};

export default AppRoutes;
