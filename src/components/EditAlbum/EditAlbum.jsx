import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useReduxStore from '../../hooks/useReduxStore';


function EditAlbum() {

    const store = useReduxStore();
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

    return (<>
        <h2>Edit Album</h2>

        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                onChange={(event) => handleTitleChange(event)}
                placeholder='Album Title'
                value={editAlbum.album_title}
            />

            <select
                onChange={(event) => handleYearChange(event)}
                value={editAlbum.year_published}>
                <option value='' disabled>Year Published</option>
                {Array.from({ length: new Date().getFullYear() - 1900 }, (_, i) => i + 1900).map(year => (
                    <option key={year} value={year}>{year}</option>))}
            </select>

            <select
                onChange={(event) => handleCopyChange(event)}
                value={editAlbum.copy_type}>
                <option value='' disabled>Copy Type</option>
                <option value="vinyl">Vinyl</option>
                <option value="cd">CD</option>
                <option value="cassette">Cassette</option>
                <option value="digital">Digital</option>
                <option value="other">Other</option>
            </select>

            <input onChange={(event) => handleTrackListChange(event)}
                placeholder='Track List'
                value={editAlbum.track_listing}
            />

            <input type='submit' value='Update Album' />
        </form>
    </>
    )

}

export default EditAlbum;
