import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

// This is a worker saga: will be fired upon "FETCH_ARTIST_LIST" actions

function* fetchArtistList() {

}

function* artistsSaga() {
    yield takeLatest('FETCH_ARTIST_LIST', fetchArtistList);
}

export default artistsSaga;