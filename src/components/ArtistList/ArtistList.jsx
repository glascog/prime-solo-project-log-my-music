import React from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useEffect } from "react";

function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return (
   <div>
        <div>This is where Artists will be listed in alphabetical order
        </div>
   </div>
   )
}

export default ArtistList;