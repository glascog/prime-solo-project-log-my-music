import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import AlbumIcon from '@mui/icons-material/Album'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import { useState } from 'react'
// import navImage from './images/vinylshelf.jpg'; 




function Nav() {
  const user = useSelector((store) => store.user);
  const [value, setValue] = useState(0)
  return (<>

    <div className="nav">
    <img src='./images/LMMicon.png' width={140} />
      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
  
          <div className='logout-container'>
            <LogOutButton className="navLink" />
          </div>


          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }} >
              <BottomNavigationAction label='Home' icon={<HomeIcon />} component={Link} to='/user' />
              <BottomNavigationAction label='Albums' icon={<AlbumIcon />} component={Link} to='/albums' />
              <BottomNavigationAction label='Artists' icon={<InterpreterModeIcon />} component={Link} to='/artists' />


            </BottomNavigation>
          </Paper>


        </>
      )}
    </div>

  </>
  );
}

export default Nav;
