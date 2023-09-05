import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// This is a worker saga: will be fired upon "FETCH_ARTIST_LIST" actions

function* fetchArtistList() {
    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.get('/api/artist', config);
        yield put({ type: 'SET_ARTIST_LIST', payload: response.data});
    } catch (error) {
        console.log('fetchArtistList get request failed', error)
    }

}

function* artistSaga() {
    yield takeLatest('FETCH_ARTIST_LIST', fetchArtistList);
}

export default artistSaga;