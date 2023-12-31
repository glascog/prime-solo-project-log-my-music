import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import artist from './artist.reducer';
import album from './album.reducer';
import artistDetail from './artist_detail.reducer';
import albumDetail from './album_detail.reducer';
import editAlbum from './edit_album.reducer';
import albumNotes from './album_notes.reducer';
import editNote from './edit_note.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  artist, // contains a list of the user's artists
  album, // contains a list of the user's albums
  artistDetail, // contains a list of albums that correspond to each artist
  albumDetail, // contains detail about a particular album
  editAlbum, // contains edited info about an album
  albumNotes, // contains all notes in DB on an album
  editNote, 
});

export default rootReducer;
