import { useState } from "react"

function AddAlbum() {

    const [artistName, setArtistName] = useState('');
    const [albumTitle, setAlbumTitle] = useState('');
    const [yearPublished, setYearPublished] = useState('');
    const [copy, setCopy] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
<form onSubmit={handleSubmit}>
    <input onChange={(event) => setArtistName(event.target.value) }
            type='text'
            placeholder="Artist Name"
            value={artistName}/>
    <input onChange={(event) => setAlbumTitle(event.target.value) }
            type='text'
            placeholder="Album Title"
            value={albumTitle}/>
    <select onChange={(event) => setYearPublished(event.target.value) }
            value={yearPublished}>
            <option value='' disabled>Year Published</option>
            {Array.from({length: new Date().getFullYear() - 1900}, (_, i) => i + 1900).map(year => (
            <option key={year} value={year}>{year}</option>))}
            </select>     
    <input onChange={(event) => setCopy(event.target.value) }
            placeholder="Copy"
            value={copy}/>
    <input onChange={(event) => setNotes(event.target.value) }
            placeholder="Notes"
            value={notes}/>

    <button>Submit Album</button>

</form>

    )

}

export default AddAlbum