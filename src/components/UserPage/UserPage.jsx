import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import './UserPage.css'



function UserPage() {

  const user = useSelector((store) => store.user);

  const containerStyle = {
    backgroundImage: 'url(./images/vinylpile.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as needed for full page coverage
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
   <>
   <body>
    <h2>Welcome, {user.username}!</h2>
    <div style={containerStyle}>
      <div>
        
        
      </div>
    </div>
    </body>
    </>
  )


}

export default UserPage;
