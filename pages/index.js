// pages/index.js
import React, { useState } from 'react';
import Login from '../components/login';
import Sidebar from '../components/sidebar';

const Home = () => {
  // Assuming isUserLoggedIn is a state that determines whether the user is logged in or not
  /*const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);*/

  return (
    <div className="app">
      <div className="app__body">
     <Sidebar/>
    </div>
    </div>
  );
};

export default Home;
