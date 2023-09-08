import { useState } from "react";
import axios from "axios";
import { response } from "express";
import { useDispatch } from "react-redux";

function AddAlbum() {

    const [artistName, setArtistName] = useState('');
    const [albumTitle, setAlbumTitle] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    const [copy, setCopy] = useState('');
    const [trackList, setTrackList] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        let newAlbum = {
            artist_name: artistName,
            album_title: albumTitle,
            year_published: yearPublished,
            copy_type: copy,
            track_listing: trackList
        }

        axios.post('/api/add_album', newAlbum)
        .then(response => {
            console.log('post was successful', response)
            dispatch({ type: 'FETCH_ARTIST_LIST'})
            dispatch({ type: 'FETCH_ALBUM_LIST'})
        })
        .catch(error => {
            console.log('error posting new album:', error)
        })
    }

    return (<>

        <p>Add Album</p>

<form onSubmit={handleSubmit}>
    <input onChange={(event) => setArtistName(event.target.value)}
            type='text'
            placeholder="Artist Name"
            value={artistName}/>
    <input onChange={(event) => setAlbumTitle(event.target.value)}
            type='text'
            placeholder="Album Title"
            value={albumTitle}/>
    <select onChange={(event) => setYearPublished(event.target.value)}
            value={yearPublished}>
            <option value='' disabled>Year Published</option>
            {Array.from({length: new Date().getFullYear() - 1900}, (_, i) => i + 1900).map(year => (
            <option key={year} value={year}>{year}</option>))}
            </select>     
    <select onChange={(event) => setCopy(event.target.value)} value={copy}>
            <option value='' disabled>Copy Type</option>
            <option value="vinyl">Vinyl</option>
            <option value="cd">CD</option>
            <option value="cassette">Cassette</option>
            <option value="digital">Digital</option>
            <option value="other">Other</option>    
    </select>
           
    <input onChange={(event) => setTrackList(event.target.value) }
            placeholder="Track List"
            value={trackList}/>

    <button>Submit Album</button>

</form>
</>
    )
}

export default AddAlbum