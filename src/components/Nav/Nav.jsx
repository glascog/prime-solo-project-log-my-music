import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';



function Nav() {
  const user = useSelector((store) => store.user);

  return (<>

<Button variant="contained">Hello world</Button>;
   
    <div className="nav">
      <Link to="/home">
        <div><img src='./images/LMMicon.png' width={100} /></div>
      </Link>
    </div>


        <div>
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

                <Link className="navLink" to="/user">
                  Home
                </Link>
          

             
                <Link className="navLink" to="/artists">
                  My Artists
                </Link>
          

          
                <Link className="navLink" to="/albums">
                  My Albums
                </Link>
            
                <LogOutButton className="navLink" />
             
            </>
          )}
        </div>

  </>
  );
}

export default Nav;
