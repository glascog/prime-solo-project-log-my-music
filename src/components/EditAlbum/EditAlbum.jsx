import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';


function EditAlbum() {

    const dispatch = useDispatch();
    const history = useHistory();
    const editAlbum = useSelector((store) => store.editAlbum);

    const handleTitleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_ALBUM',
            payload: { property: 'album_title', value: event.target.value }
        });
    }

    const handleYearChange = (event) => {
        dispatch({
            type: 'EDIT_ALBUM',
            payload: { property: 'year_published', value: event.target.value }
        });
    }

    const handleCopyChange = (event) => {
        dispatch({
            type: 'EDIT_ALBUM',
            payload: { property: 'copy_type', value: event.target.value }
        });
    }

    const handleTrackListChange = (event) => {
        dispatch({
            type: 'EDIT_ALBUM',
            payload: { property: 'track_listing', value: event.target.value }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // put request for updating album title to /album/:id
        axios.put(`/api/album/${editAlbum[0]?.id}`, editAlbum)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push('/albums')
            })
            .catch(error => {
                console.log('error on album edit put request:', error);
            })
    }

    return (
        <>
            <h2>Edit Album</h2>

            <form onSubmit={(event) => handleSubmit(event)}>
                <TextField
                    onChange={(event) => handleTitleChange(event)}
                    label="Album Title"
                    variant="filled"
                    fullWidth
                    style={{ width: '300px' }}
                    value={editAlbum.album_title}
                    margin="normal"
                />

                <TextField
                    onChange={(event) => handleYearChange(event)}
                    label="Year Published"
                    variant="outlined"
                    fullWidth
                    style={{ width: '150px' }}
                    select
                    SelectProps={{
                        native: true,
                        sx: { fontSize: '30px' },
                    }}
                    value={editAlbum.year_published}
                    margin="normal"
                >
                    <option value="" disabled>
                        Year Published
                    </option>
                    {Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => i + 1900).map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </TextField>

                <TextField
                    onChange={(event) => handleCopyChange(event)}
                    label="Copy Type"
                    variant="outlined"
                    fullWidth
                    style={{ width: '150px' }}
                    select
                    SelectProps={{
                        native: true,
                        sx: {fontSize: "30px"}
                    }}
                    value={editAlbum.copy_type}
                    margin="normal"
                >
                    <option value="" disabled>
                        Copy Type
                    </option>
                    <option value="vinyl">Vinyl</option>
                    <option value="cd">CD</option>
                    <option value="cassette">Cassette</option>
                    <option value="digital">Digital</option>
                    <option value="other">Other</option>
                </TextField>

                <TextField
                    onChange={(event) => handleTrackListChange(event)}
                    label="Track List"
                    variant="filled"
                    fullWidth
                    style={{ width: '300px' }}
                    multiline
                    rows={4}
                    value={editAlbum.track_listing}
                    margin="normal"
                />

                <Button type="submit" variant="contained" startIcon={<UpdateIcon />}>Update Album</Button>
            </form>
        </>
    );
}

export default EditAlbum;