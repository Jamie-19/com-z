import {app} from './firebase.config';
import React, { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Collections, Mic, MoreVert } from '@mui/icons-material';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {collection , doc, setDoc, getFirestore, getDocs } from "firebase/firestore";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



import axios from 'axios';
const Chat = () => {
const [file, setFile] = useState(null);
  const room = "room1";
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAudioInputChange = async (e) => {
    

    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, 'some-child');
      const metadata = {
        contentType: 'audio/mp3'
      };

      try {
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const url = await getDownloadURL(storageRef);
        console.log(url);
        const db = getFirestore();
        axios.get('https://cc4d-14-139-184-222.ngrok-free.app/', {
            audio: url
            })
            .then((response) => {
            console.log(response);
            }
            )
            .catch((error) => {
            console.log(error);
            }
            );

        // Do something with the download URL (save to state, send to server, etc.)
      } catch (error) {
        console.error('Error uploading file:', error.message);
      }
    }
    else {
        console.log('No file selected');
        }
  };

  return (
    <div className="chat">
      <div className="chat__background">
        <div className="chat__header">
          <div className="avatar__container">
            <Avatar alt={room} />
          </div>
          <div className="chat__header--info">
            <h3>{room}</h3>
          </div>
          <div className="chat__header--right">
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreVert />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>

        {/* File Input for Audio */}
        <div className="chat__header--footer">
          <label htmlFor="audioInput">Input Audio:</label>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
          }}>
          <input
            type="file"
            accept="audio/*"
            id="audioInput"
             onChange={(e) => setFile(e.target.files[0])}
            // onChange={(e) => handleAudioInputChange(e)}
          />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px"
          }}>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}
                onClick={(e) => handleAudioInputChange(e)}
          > 
        </Button>
        </div>
        
        </div>
        <div style={{
        display: "-webkit-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "20px",
        zIndex: "999", 
      }}>
        <Button style={{
          padding: "20px",
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2)",
        }}>
          <Mic />
        </Button>
      </div>

      </div>
      
    </div>
  );
};

export default Chat;
