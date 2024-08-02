// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './redux/action'; // Ensure the path and file name are correct
import Routes from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Example action dispatch
    dispatch(setData());
  }, [dispatch]);

  return <Routes />;
};

export default App;
