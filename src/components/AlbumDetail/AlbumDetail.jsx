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
        dispatch({ type: 'FETCH_ALBUM_DETAIL', payload: Number(albumId) });
    }, [dispatch]);

    return (
        <>
            <div>
                <table className="album-id-table">
                    <thead>
                        <tr>
                            <th>{store.albumDetail[0]?.artist_name}</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{store.albumDetail[0]?.album_title}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.year_published}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.copy_type}</td>
                        </tr>
                        <tr>
                            <td>{store.albumDetail[0]?.track_listing}</td>
                        </tr>
                        <tr>
                            <td><button>Edit Album Info</button>
                            <button>Delete Album</button></td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </>

    )


}

export default AlbumDetail