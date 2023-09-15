import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

function AlbumList() {
    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_LIST' });
    }, [dispatch]);

    return (
        <div>
            <div className="nav-buttons">
                <div>
                    <Link to='/add_album'><Button> Add Album</Button></Link>
                </div>
            </div>

            <div>
                <h1>My Albums</h1>
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Album Title</TableCell>
                            <TableCell>Artist Name</TableCell>
                            <TableCell>Add Note</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.album.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.album_title}</TableCell>
                                <TableCell>{item.artist_name}</TableCell>
                                <TableCell>
                                    <Link to={`/add_notes/${item.album_id}`}><button>Add Notes</button></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AlbumList;
