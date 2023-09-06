import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// This is a worker saga: will be fired upon "FETCH_ALBUM_LIST" actions

function* fetchAlbumList() {
    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.get('/api/album', config);
        yield put({ type: 'SET_ALBUM_LIST', payload: response.data });
    } catch (error) {
        console.log('fetchAlbumList get request failed', error)
    }

}

function* albumSaga() {
    yield takeLatest('FETCH_ALBUM_LIST', fetchAlbumList);
}

export default albumSaga;