import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useReduxStore from '../../hooks/useReduxStore';
import editAlbum from '../../redux/reducers/edit_album.reducer';


function EditAlbum() {

    const store = useReduxStore();
    const dispatch = useDispatch();
    const history = useHistory();
    const editAlbum = useSelector((store) => store.editAlbum);

    //    console.log('editAlbum[0].id is:', editAlbum[0]?.id)

    function handleChange(event) {
        event.preventDefault();
        dispatch({
                type: 'EDIT_ALBUM_TITLE', 
                payload: { property: 'album_title', value: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        // put request to /album_detail/:id
        axios.put(`/api/album/${editAlbum[0]?.id}`, editAlbum)
            .then(response => {
                dispatch({ type: 'EDIT_CLEAR' });
                history.push('/albums')
            })
            .catch(error => {
                console.log('error on put:', error);
            })
    }

    return (<>
        <h2>Edit Album</h2>
        {/* <p>We are editing this album: {editAlbum[0]?.album_title} with id: {editAlbum[0]?.id}</p> */}

        <form onSubmit={handleSubmit}>
            <input 
                onChange={(event) => handleChange(event)}
                placeholder='Album Title'
                value={editAlbum.album_title}
            />

            {/* <input 
                onChange={(event) => handleChange(event)}
                placeholder='Year Published'
                value={editAlbum.year_published}
            />

            <input 
                onChange={(event) => handleChange(event)}
                placeholder='Copy Type'
                value={editAlbum.copy_type}
            />

<input 
                onChange={(event) => handleChange(event)}
                placeholder='Track List'
                value={editAlbum.track_listing}
            /> */}
            <input type='submit' value='Update Album' />

        </form>
    </>
    );
}

export default EditAlbum;
