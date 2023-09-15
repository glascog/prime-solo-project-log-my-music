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
            <Link to='/add_album'><button color='gray' >Add Album</button></Link>
        </div>
   </div>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Artist</TableCell>
                        <TableCell>Albums</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.artist.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Link to={`/artist_detail/${item.id}`}>{item.artist_name}</Link>
                            </TableCell>
                            <TableCell>{item.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
   )}
    

export default ArtistList;