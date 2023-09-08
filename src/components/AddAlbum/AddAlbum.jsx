import { useState } from "react"

function AddAlbum() {

    const [artistName, setArtistName] = useState('')


    return (
<form>
    <input onChange={(event) => setArtistName(event.target.value) }
            placeholder="artist"
            value={artistName}/>
    
    <input/>
</form>

    )

}

export default AddAlbum