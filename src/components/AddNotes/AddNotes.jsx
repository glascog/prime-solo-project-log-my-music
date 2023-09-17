import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';

function AddNotes() {

    const history = useHistory();
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
            <Button type="submit" startIcon={<PublishIcon />}>Submit Album Notes</Button>


        </form>


    </>
    )


}

export default AddNotes;