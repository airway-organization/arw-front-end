// router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/Login';
import SignUp from '../pages/Register';
import Home from '../pages/Home';
import QA from '../pages/QA';
import ImagePage from '../pages/Image/index';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/qa" element={<QA />} />
      <Route path="/image" element={<ImagePage />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default Routers;
