import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function UserPage() {

  const user = useSelector((store) => store.user);
  return (

            <p>Welcome, {user.username}!</p>
           
  )           
}

export default UserPage;
