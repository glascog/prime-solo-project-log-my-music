import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';


function ArtistDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL' });
    }, [dispatch]);

    return (
    <>
    <div>{store.artistDetail}</div>
    </>

    )


}

export default ArtistDetail