import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';


function AlbumList() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_LIST' });
    }, [dispatch]);

   return (
   <div>
        <div>This is where Albums will be listed in alphabetical order
        </div>
   </div>
   )
}

export default AlbumList;