import React from 'react';
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