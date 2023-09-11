import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import artistSaga from './artist.saga';
import albumSaga from './album.saga';
import artistDetailSaga from './artist_detail.saga';
import albumDetailSaga from './album_detail.saga';
import albumNotesSaga from './album_notes.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    artistSaga(),
    albumSaga(),
    artistDetailSaga(),
    albumDetailSaga(),
    albumNotesSaga(),
  ]);
}
