import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete'; import TextareaAutosize from '@mui/material/TextareaAutosize';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import './AlbumDetail.css'

function AlbumDetail() {

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const { albumId } = useParams();

    console.log('store.albumNotes', store.albumNotes)

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_DETAIL', payload: Number(albumId) });
        dispatch({ type: 'FETCH_ALBUM_NOTES', payload: Number(albumId) })
    }, [dispatch]);

    const handleEditAlbum = (props) => {
        // dispatch to store album info in redux
        dispatch({ type: 'SET_EDIT_ALBUM', payload: store.albumDetail });
        // route to edit form
        history.push(`/edit_album`);
    };

    const handleDeleteAlbum = (props) => {
        let albumId = props.id;

        const confirmDelete = window.confirm("Are you sure you want to delete this album?");

        if (confirmDelete) {
            axios.delete(`/api/album/${albumId}`)
                .then(response => {
                    console.log('delete worked!', response)
                    dispatch({ type: 'FETCH_ALBUM_LIST' })
                    history.push('/albums')
                })
                .catch(error => {
                    console.log('error deleting album:', error)
                })
        }
    };

    const handleEditNote = (props) => {
        let noteId = props
        dispatch({ type: 'SET_EDIT_NOTE', payload: store.albumNotes });
        history.push(`/edit_note/${noteId}`);
    }

    const handleDeleteNote = (props) => {
        let noteId = props;

        const confirmDelete = window.confirm("Are you sure you want to delete this note?");

        if (confirmDelete) {
            axios.delete(`/api/album_detail/${props}`)
                .then(response => {
                    console.log('delete note worked!', response)
                    dispatch({ type: 'FETCH_ALBUM_LIST' })
                    history.push('/albums')
                })
                .catch(error => {
                    console.log('error deleting note:', error)
                })
        }
    };

    const handleAddNote = (props) => {
        history.push(`/add_notes/${props}`)
    }

    return (
        <>
            <div>
                <table className="album-id-table">
                    <thead>
                        <tr>
                            <th>{store.albumDetail[0]?.artist_name}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{store.albumDetail[0]?.album_title}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.year_published}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.copy_type}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.track_listing}</td>
                        </tr>
                        <tr>
                            <td><Button
                                onClick={() => handleEditAlbum(store.albumDetail[0])}>
                                <EditNoteIcon />
                            </Button>
                                <Button
                                    onClick={() => handleDeleteAlbum(store.albumDetail[0])}>
                                    <DeleteIcon />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>Notes on {store.albumDetail[0]?.album_title}</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>{store.albumNotes.map((notes, index) => (
                        <tr key={index}>
                            <td>
                                <TextareaAutosize
                                    style={{
                                        resize: "vertical",
                                        fontFamily: "inherit",
                                        fontSize: "18px",
                                        width: "100%"
                                    }}
                                    value={notes.notes}
                                    readOnly
                                />
                            </td>
                            <div className="button-column">
                                <td><Button
                                    onClick={() => handleEditNote(notes.id)}>
                                    <EditNoteIcon />
                                </Button>
                                    <Button
                                        onClick={() => handleDeleteNote(notes.id)}>
                                        <DeleteIcon />
                                    </Button>
                                </td>
                            </div>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <Button onClick={() => handleAddNote(store.albumDetail[0]?.id)} variant='outlined' >{<NoteAddIcon />}</Button>

            </div>
        </>

    )


}

export default AlbumDetail