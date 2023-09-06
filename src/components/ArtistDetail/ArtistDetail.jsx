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
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);

    return (
    <>
    <div>{store.artistDetail[0].artist_name}</div>
    </>

    )
}

export default ArtistDetail;