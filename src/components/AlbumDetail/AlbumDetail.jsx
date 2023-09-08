import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from "react-router-dom";

function AlbumDetail() {

    const albumTitle = useParams();

    // const dispatch = useDispatch();
    // const store = useReduxStore();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_ARTIST_DETAIL' });
    // }, [dispatch]);

    return (
    <div className="artist_detail_card">
        <h2>{albumTitle}</h2>
    </div>

    )


}

export default AlbumDetail