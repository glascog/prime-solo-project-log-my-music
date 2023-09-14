import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';




function UserPage() {

  const user = useSelector((store) => store.user);
  return (
<>
            <p>Welcome, {user.username}!</p>
            <Button variant="contained">Hello world</Button>
            </>    
  )           


}

export default UserPage;
