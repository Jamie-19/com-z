// pages/index.js
import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Chat from '../components/chat';

const Home = () => {
  // Assuming isUserLoggedIn is a state that determines whether the user is logged in or not
  /*const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);*/

  const user = [{
    id: 1,
    name: "Vaidyanath B",
    short: "VB"
  }, {
    id: 2,
    name: "Rahan Jose",
    short: "RJ"
  }, {
    id: 3,
    name: "Hari Narayanan",
    short: "HN"
  }];


  return (
    <div className="app">
      <div className="app__body">
     <Sidebar/>
     <Chat user ={user.name} />
    </div>
    </div>
  );
};

export default Home;
