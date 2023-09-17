import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AlbumIcon from '@mui/icons-material/Album';


function AlbumList() {
    const dispatch = useDispatch();
    const store = useReduxStore();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_LIST' });
    }, [dispatch]);

    const handleAlbumClick = (props) => {
        let albumId = props
        history.push(`/album_detail/${albumId}`)
    };

    const handleAddNoteClick = (props) => {
        let albumId = props
        history.push(`/add_notes/${albumId}`)
    };

    const handleAddAlbumClick = () => {
        history.push(`/add_album`)
    };

    return (
        <div>
            <div className="nav-buttons">
                <div>
                    <Button onClick={() => handleAddAlbumClick()} startIcon={<LibraryAddIcon />}> Add Album</Button>
                </div>
            </div>

            <div>
                <h2>{<AlbumIcon fontSize="large" />}My Albums</h2>
            </div>

            <TableContainer component={Paper} style={{ maxWidth: '375px', margin: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold', fontSize: '16px', color: '#F1FAEE' }}>Album Title</TableCell>
                            <TableCell style={{ fontWeight: 'bold', fontSize: '16px', color: '#F1FAEE' }}>Artist Name</TableCell>
                            <TableCell style={{ fontWeight: 'bold', fontSize: '16px', color: '#F1FAEE' }}>Add Note</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.album.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell onClick={() => handleAlbumClick(item.album_id)}>{item.album_title}</TableCell>
                                <TableCell>{item.artist_name}</TableCell>
                                <TableCell onClick={() => handleAddNoteClick(item.album_id)}>
                                    <Button startIcon={<NoteAddIcon />}></Button>
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
