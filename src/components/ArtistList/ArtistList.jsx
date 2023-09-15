import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link, useHistory } from "react-router-dom";
import './ArtistList.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import Typography from "@mui/material";
import { PropaneTankSharp } from "@mui/icons-material";

function ArtistList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

    const handleArtistClick = (props) => {
       history.push(`/artist_detail/${props}`)
    }

   return ( 
   <>
   <div className="nav-buttons">
   <div>
                    <Link to='/add_album'><Button startIcon={<LibraryAddIcon />}> Add Album</Button></Link>
                </div>
   </div>

   <div>
                <h2>{<InterpreterModeIcon fontSize="large" />} My Artists</h2>
            </div>

        <TableContainer component={Paper} style={{ maxWidth: '350px', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '20px', color: "#F1FAEE", fontFamily:"revert" }}>Artist</TableCell>
                        <TableCell style={{ fontWeight: 'bold', fontSize: '20px', color:"#F1FAEE", fontFamily:"revert" }}>Albums</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.artist.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell onClick={() => handleArtistClick(item.id)} className="linkCell" sx={{ fontWeight: 'bold', fontSize: '16px', }}>
                                 {item.artist_name}
                            </TableCell>
                            <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
   )}
    

export default ArtistList;