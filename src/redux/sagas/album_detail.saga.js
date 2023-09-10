import axios from "axios";
import {put, takeLatest} from 'redux-saga/effects';


function* fetchAlbumDetail(action) {

    const albumId = action.payload
    console.log('albumId is', albumId);

    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };
        const response = yield axios.get(`/api/album_detail/${albumId}`, config);
        yield put({ type: 'SET_ALBUM_DETAIL', payload: response.data })
    } catch (error) {
        console.log('error', error);
    }
}

function* albumDetailSaga() {
    yield takeLatest('FETCH_ALBUM_DETAIL', fetchAlbumDetail);
}

export default albumDetailSaga;