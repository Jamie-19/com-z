// components/Sidebar.js
import React from 'react';
import { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Add, ExitToApp, Home,  Message,  PeopleAlt,  SearchOutlined } from '@mui/icons-material';
import SidebarTab from './sidebartab';
import SidebarList from './sidebarlist';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';



const tabs = [ {
  id: 1,
  icon:<Home/>,
},{
  id: 2,
  icon:<Message/>,
},{
  id: 3,
  icon:<PeopleAlt/>,
}];

const Sidebar = () => {

  const [menu,setMenu] = useState(1);
  const [roomName,setRoomName] = useState('')
  const [isCreateRoom,setisCreateRoom] = useState(false);
  const data = [{
    id: 1,
    name:"Vaidyanath B",
    short:"VB"
  },{
    id: 2,
    name:"Rahan Jose",
    short:"RJ"
  },{
    id: 3,
    name:"Hari Narayanan",
    short:"HN"
  }];

  async function createRoom(){
    console.log(roomName);
  }



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
      {/*Search*/}
      <div className="sidebar__search">
        <form className="sidebar__search--container">
          <SearchOutlined/>
          <input 
          type="text" 
          id="search"
          placeholder="Search for rooms"/>
        </form>

      </div>

      <div className="sidebar__menu">
        {tabs.map((tab) => (
          <SidebarTab key={tab.id}
          onClick={() => setMenu(tab.id)}
          isActive = {menu === tab.id}
          >
            <div className="sidebar__menu--home">
              {tab.icon}
              <div className="sidebar__menu--line">

              </div>
              </div>
          </SidebarTab>
        ))}
        </div>

        {menu === 1 ?(
          <SidebarList title="Chats" data={data}/>
        ): menu === 2 ? (
          <SidebarList title="Rooms" data={data}/>
        ): menu === 3 ? (
          <SidebarList title="Users" data={data}/>
        ): menu === 4 ?(
          <SidebarList title="Search Results" data={data}/>
        ) : null}
        

      {/*Room Button */}
      <div className="sidebar__chat--addRoom">
        <IconButton onClick={()=>setisCreateRoom(true)}>
          <Add/>
        </IconButton>
        </div>

        {/*Create Room Dialog*/}

        <Dialog maxWidth="sm" open={isCreateRoom} onClose={() => setisCreateRoom(false)} >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the GD room
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={event => setRoomName(event.target.value)}
            value={roomName}
            id="rooms"
            label="GD Room"
            type="text"
            fullWidth
            variant="filled"
            styles={{margintop:"20px"}}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setisCreateRoom(false)}>Cancel</Button>
          <Button color="success" onClick={createRoom}>Submit</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default Sidebar;
