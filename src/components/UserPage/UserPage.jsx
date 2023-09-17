import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import './UserPage.css';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useHistory } from 'react-router-dom';



function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();

  const containerStyle = {
    backgroundImage: 'url(./images/shinyvinyl.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '75vh', // Adjust as needed for full page coverage
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleAddAlbumClick = () => {
    history.push(`/add_album`)
  };

  return (
   <>
   <body>
    <h2>Welcome, {user.username}!</h2>
    <div style={containerStyle}>
      <div>
        <Button onClick={() => handleAddAlbumClick()} startIcon= {<LibraryAddIcon />} variant='outlined' sx={{ color: '#A8DADC', borderColor: '#A8DADC' }}>Add Album</Button>
        
      </div>
    </div>
    </body>
    </>
  )


}

export default UserPage;
