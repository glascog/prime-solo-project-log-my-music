import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from "react-router-dom";


function AlbumDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const { albumId } = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_DETAIL', payload: Number });
    }, [dispatch]);

    return (
    <>
    
    </>

    )


}

export default AlbumDetail