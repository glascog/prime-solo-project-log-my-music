import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, Link } from "react-router-dom";
import AlbumDetail from "../AlbumDetail/AlbumDetail";

function ArtistDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const { artistId } = useParams();

    // const artistDetail = store.artistDetail

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);



    return <>

        <div>{store.artistDetail[0]?.artist_name}</div>
        <section className="albums"> */}
{/* 
            {/* {/* <div>{store.artistDetail.map(({ album_title }) => (
                <div key={album_title}>
                    <AlbumDetail title={album_title} />
                </div>
            ))}
            </div>
        </section>
    </> */} 
    {/* )
} */}

export default ArtistDetail;