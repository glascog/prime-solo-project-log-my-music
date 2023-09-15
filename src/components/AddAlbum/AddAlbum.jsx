import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField"; // Import Material-UI TextField
import { Button } from "@mui/material";
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';

function AddAlbum() {
  const [artistName, setArtistName] = useState("");
  const [albumTitle, setAlbumTitle] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [copy, setCopy] = useState("");
  const [trackList, setTrackList] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    let newAlbum = {
      artist_name: artistName,
      album_title: albumTitle,
      year_published: yearPublished,
      copy_type: copy,
      track_listing: trackList,
    };

    axios
      .post("/api/add_album", newAlbum)
      .then((response) => {
        console.log("post was successful", response);
        dispatch({ type: "FETCH_ARTIST_LIST" });
        dispatch({ type: "FETCH_ALBUM_LIST" });
        history.push('/albums')
      })
      .catch((error) => {
        console.log("error posting new album:", error);
      });
  };

  return (
    <>
      <h2>Add Album</h2>

      <form onSubmit={handleSubmit}>
        {/* Replace standard input fields with Material-UI TextField */}
        <TextField
          onChange={(event) => setArtistName(event.target.value)}
          label="Artist Name"
          variant="filled"
          fullWidth
          style={{ width: '300px' }}
          value={artistName}
          margin="normal"
        />
        <TextField
          onChange={(event) => setAlbumTitle(event.target.value)}
          label="Album Title"
          variant="filled"
          fullWidth
          style={{ width: '300px' }}
          value={albumTitle}
          margin="normal"
        />
        <TextField
          onChange={(event) => setYearPublished(event.target.value)}
          label="Year Published"
          variant="outlined"
          fullWidth
          style={{ width: '150px' }}
          select
          SelectProps={{
            native: true,
          }}
          value={yearPublished}
          margin="normal"
        >
          <option value="" disabled>
            Year Published
          </option>
          {Array.from(
            { length: new Date().getFullYear() - 1900 },
            (_, i) => i + 1900
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </TextField>
        <TextField
          onChange={(event) => setCopy(event.target.value)}
          label="Copy Type"
          variant="outlined"
          fullWidth
          style={{ width: '150px' }}
          select
          SelectProps={{
            native: true,
          }}
          value={copy}
          margin="normal"
        >
          <option value="" disabled>
            Copy Type
          </option>
          <option value="vinyl">Vinyl</option>
          <option value="cd">CD</option>
          <option value="cassette">Cassette</option>
          <option value="digital">Digital</option>
          <option value="other">Other</option>
        </TextField>
        <TextField
          onChange={(event) => setTrackList(event.target.value)}
          label="Track List"
          variant="filled"
          fullWidth
          style={{ width: '300px' }}
          multiline
          rows={4}
          value={trackList}
          margin="normal"
        />

        <button>Submit Album</button>
      </form>
    </>
  );
}

export default AddAlbum;
