import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchAlbumNotes(action) {

    const albumId = action.payload
    console.log('albumId is', albumId);

    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.get(`/api/album/${albumId}`, config);
        yield put({ type: 'SET_ALBUM_NOTES', payload: response.data })
    } catch (error) {
        console.log('error', error);
    }
}

function* albumNotesSaga() {
    yield takeLatest('FETCH_ALBUM_NOTES', fetchAlbumNotes);
}

export default albumNotesSaga;