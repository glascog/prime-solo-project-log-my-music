import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function AddNotes() {

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const { albumId } = useParams();

    console.log('albumId is:', albumId)

    const [albumNotes, setAlbumNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newNotes = { notes: albumNotes }

        axios.post(`/api/album/${albumId}`, newNotes)
            .then(response => {
                console.log('post was successful', response)
                history.push(`/album_detail/${albumId}`)
            })
            .catch(error => {
                console.log('error posting new notes:', error)
            })
    }

    return (<>

        <h2>Add Notes </h2>

        <form onSubmit={handleSubmit}>
            <TextField onChange={(event) => setAlbumNotes(event.target.value)}
                label='Notes on Album'
                variant="filled"
                fullWidth
                style={{ width: '300px' }}
                multiline
                rows={4}
                value={albumNotes}
                margin="normal"
            />
            <button>Submit Album Notes</button>


        </form>


    </>
    )


}

export default AddNotes;