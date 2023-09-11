import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function AddNotes() {

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const { albumId } = useParams();

    console.log('albumId is:', albumId)
    // console.log(store.album)

    const [albumNotes, setAlbumNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        let newNotes = {notes: albumNotes}

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
    
    <p>Add Notes </p>

    <form onSubmit={handleSubmit}>
        <input  onChange={(event) => setAlbumNotes(event.target.value)}
                type='text'
                placeholder="Notes on album"
                value={albumNotes}
        />
        <button>Submit Album Notes</button>


    </form>
    
    
    </>
    )


}

export default AddNotes;