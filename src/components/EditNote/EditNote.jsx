import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';


function EditNote() {

    const dispatch = useDispatch();
    const history = useHistory();
    const editNote = useSelector((store) => store.editNote)
    const { noteId } = useParams();
    console.log('editNote:', editNote)

    const handleNoteChange = (event) => {
        dispatch({
            type: 'EDIT_NOTE',
            payload: { property: 'notes', value: event.target.value }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // put request for updating album notes
        axios.put(`/api/album_detail/${noteId}`, editNote)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push(`/albums`)
            })
            .catch(error => {
                console.log('error on note edit put request:', error)
            })
    }


    return (<>

        <h2>Edit Note</h2>

        <form onSubmit={(event) => handleSubmit(event)}>
            <TextField
                onChange={(event) => handleNoteChange(event)}
                label='Edit Album Note'
                variant="filled"
                fullWidth
                style={{ width: '300px' }}
                multiline
                rows={4}
                placeholder={editNote.notes}
                value={editNote.notes}
                margin='normal'
            />
            <Button type='submit' startIcon={<UpdateIcon />}>Update Note</Button>

        </form>

    </>)


}

export default EditNote;