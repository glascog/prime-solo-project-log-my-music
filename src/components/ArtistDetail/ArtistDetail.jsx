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


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);



    return (<>

        <div>
            <Link to='/add_album'><button>Add Album</button></Link>
        </div>

        <div>{store.artistDetail[0]?.artist_name}</div>
        <section className="albums">

            <div>
                {store.artistDetail?.map(({ album_title, id }) => (
                    <Link to={`/album_detail/${id}`} key={id}>
                        {album_title}
                    </Link>
                ))}
            </div>

        </section>


    </>
    )
}

export default ArtistDetail;