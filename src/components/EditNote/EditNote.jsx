import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function EditNote() {

    const dispatch = useDispatch();
    const editNote = useSelector((store) => store.editNote)
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
        axios.put(`/api/album_detail/${editNote[0].id}`, editNote)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push('/albums')
            })
            .catch(error => {
                console.log('error on note edit put request:', error)
            })
    }


    return (<>
        
        <h2>Edit Note</h2>

        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                onChange={(event) => handleNoteChange(event)}
                placeholder={editNote.notes}
                value={editNote.notes}
            />
        <input type='submit' value='Update Note' />

        </form>

</>)


}

export default EditNote;