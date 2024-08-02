import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const selectedRow = useSelector((state) => state.selectedRow);

  if (!selectedRow) {
    return <p>No row selected</p>;
  }

  return (
    <div>
      <h2>Details</h2>
      <p>ID: {selectedRow.id}</p>
      <p>Name: {selectedRow.name}</p>
      <p>Details: {selectedRow.details}</p>
    </div>
  );
};

export default Details;
