// src/Components/DataTable.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Update import
import { selectRow } from '../redux/action';

const DataTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Update variable

  const handleRowClick = (rowId) => {
    dispatch(selectRow(rowId));
    navigate(`/details/${rowId}`); // Use navigate instead of history
  };

  // Component logic and JSX
};
