// components/Sidebar.js
import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Add, ExitToApp, SearchOutlined } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar alt="James Joseph" sx={{ bgcolor: deepOrange[500] }}>JJ</Avatar>
          <h3>James Joseph</h3>
        </div>
        <div className="sidebar__header--right">
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <form className="sidebar__search--container">
          <SearchOutlined/>
          <input 
          type="text" 
          id="search"
          placeholder="Search for rooms"/>
        </form>
      </div>
      <div className="sidebar__chat--addRoom">
        <IconButton>
          <Add />
        </IconButton>

        </div>
    </div>
  );
};

export default Sidebar;
