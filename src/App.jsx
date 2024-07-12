// App.js
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import Routers from './config/Router';

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== '/' && location.pathname !== '/signup') && <ResponsiveAppBar />}
      <Routers />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <MainContent />
  </BrowserRouter>
);

export default App;
