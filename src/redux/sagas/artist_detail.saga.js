import axios from "axios";
import { put, select, takeLatest } from 'redux-saga/effects';
import useReduxStore from "../../hooks/useReduxStore";


// This worker saga will fire upon all "FETCH_ARTIST_DETAIL" actions
function* fetchArtistDetail(action) {

   const artistId = action.payload

    try {
        const config = {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true,
        };
        // const id = action.payload.id
        const response = yield axios.get(`/api/artist_detail/${artistId}`, config);
        yield put({ type: 'SET_ARTIST_DETAIL', payload: response.data });
    } catch (error) {
        console.log('error', error);
        
    }

}

function* artistDetailSaga() {
    yield takeLatest('FETCH_ARTIST_DETAIL', fetchArtistDetail);
}

export default artistDetailSaga;