// import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
// import HomeIcon from '@mui/icons-material/Home'
// import AlbumIcon from '@mui/icons-material/Album'
// import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
// import { useState } from 'react'
// import { Link } from 'react-router-dom';

// function BottomNav() {
    
//     const [value, setValue] = useState(0)
//     return (

//         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }} >
//         <BottomNavigationAction label='Home' icon={<HomeIcon />} component={Link} to='/user'/>
//         <BottomNavigationAction label='Albums' icon={<AlbumIcon />} component={Link} to='/albums' />
//         <BottomNavigationAction label='Artists' icon={<InterpreterModeIcon />} component={Link} to='/artists' />


// </BottomNavigation>
// </Paper>
//     )

// }

// export default BottomNav;