// src/routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './Components/DataTable';
import Details from './Components/Details';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/data-table" element={<DataTable />} />
      <Route path="/details" element={<Details />} />
      {/* Other routes */}
    </Routes>
  </Router>
);

export default AppRoutes;
