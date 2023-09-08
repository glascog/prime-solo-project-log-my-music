import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';


function AlbumDetail({title}) {

    // const dispatch = useDispatch();
    // const store = useReduxStore();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_ARTIST_DETAIL' });
    // }, [dispatch]);

    return (
    <div className="artist_detail_card">
        <h2>{title}</h2>
    </div>

    )


}

export default AlbumDetail