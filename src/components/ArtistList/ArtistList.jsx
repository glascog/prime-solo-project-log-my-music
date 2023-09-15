import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from "react-router-dom";
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


function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return ( 
   <>
   <div className="nav-buttons">
   <div>
                    <Link to='/add_album'><Button startIcon={<LibraryAddIcon />}> Add Album</Button></Link>
                </div>
   </div>

   <div>
                <h2>My Artists</h2>
            </div>

        <TableContainer component={Paper} style={{ maxWidth: '375px', margin: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }}>Artist</TableCell>
                        <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }}>Albums</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.artist.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link to={`/artist_detail/${item.id}`}>{item.artist_name}</Link>
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