import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
import { Menu, Button, rem } from '@mantine/core';
import { IconDisc, IconMicrophone2, IconHome2 } from '@tabler/icons-react';


function Nav() {
  const user = useSelector((store) => store.user);

  return (<>
    <div className="nav">
      <Link to="/home">
        <div><img src='./images/LMMicon.png' width={125} /></div>
      </Link>
    </div>
    <Menu width={160} shadow='md'>
      <Menu.Target><Button variant="light" color="dark" radius="sm"  style={{
      position: 'absolute',
      top: '15px',
      right: '10px', // Adjust the right position as needed
    }} >Menu</Button></Menu.Target>

      <Menu.Dropdown>

        <div>
          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Menu.Item>
              <Link className="navLink" to="/login">
                Login / Register
              </Link>
            </Menu.Item>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>

              <Menu.Item icon={<IconHome2 size={rem(16)} />}>
                <Link className="navLink" to="/user">
                  Home
                </Link>
              </Menu.Item>

              <Menu.Item icon={<IconMicrophone2 size={rem(16)} />}>
                <Link className="navLink" to="/artists">
                  My Artists
                </Link>
              </Menu.Item>

              <Menu.Item icon={<IconDisc size={rem(16)} />}>
                <Link className="navLink" to="/albums">
                  My Albums
                </Link>
              </Menu.Item>

              <Menu.Item>
                <LogOutButton className="navLink" />
              </Menu.Item>
            </>
          )}
        </div>

      </Menu.Dropdown>
    </Menu>
  </>
  );
}

export default Nav;
