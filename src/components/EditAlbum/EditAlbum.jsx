import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useReduxStore from '../../hooks/useReduxStore';


function EditAlbum() {

   const store = useReduxStore();

    return (<>
      <h2>Edit Album</h2>
      <p>We are editing this album: {store.album_title} with id: {store.id}</p>
      </>
    );
}

export default EditAlbum;
