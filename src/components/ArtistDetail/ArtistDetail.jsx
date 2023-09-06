import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from "react-router-dom";

function ArtistDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const {artistId} = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL' });
    }, [dispatch]);

    return (
    <>
    <div>{store.artistDetail.artistId}</div>
    </>

    )


}

export default ArtistDetail