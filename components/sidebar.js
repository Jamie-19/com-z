// components/Sidebar.js
import React from 'react';
import { useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
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
 
  const val =[{
    id:1,
    name:"room1",
  }]
  const [menu,setMenu] = useState('');
  const [reports] = useState([]);
  const [rooms,setRooms] = useState(val);
  const [roomName,setRoomName] = useState('');
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

  const report=[{
    id:1,
    name:"Report for "
    }];

  async function createRoom(){
    if(roomName?.trim()){
        const newRoom = {
          id:rooms.length + 1,
          name:roomName,
        };

        setRooms((prevRooms) => [...prevRooms,newRoom]);
        setRoomName('');
        setisCreateRoom(false);
    }
  }

   React.useEffect(() => {
     const updatedReports = data.map((user) => ({
       id: user.id,
       name: `Report for ${user.name}`,
     }));
    //  setReports(updatedReports);
} , [data]);


  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar alt="James Joseph" sx={{ bgcolor: deepPurple[500] }}>JJ</Avatar>
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

        { menu === 1 ? (
          <SidebarList title="Rooms" data={rooms}/>
        ): menu === 2 ? (
          <SidebarList title="Reports" data={reports}/>
        ): menu === 3 ?(
          <SidebarList title="Users" data={data}/>
        ) : menu === 4 ?(
          <SidebarList title="" data={data}/>
          ):null}
        

      {/*Room Button */}
      <div className="sidebar__chat--addRoom">
        <IconButton onClick={()=>setisCreateRoom(true)}>
          <Add/>
        </IconButton>
        </div>

        {/*Create Room Dialog*/}

        <Dialog maxWidth="sm" open={isCreateRoom} onClose={() => setisCreateRoom(false)} >
        <DialogTitle>GD</DialogTitle>
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