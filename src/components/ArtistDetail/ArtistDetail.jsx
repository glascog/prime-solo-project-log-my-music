import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams } from "react-router-dom";
import AlbumDetail from "../AlbumDetail/AlbumDetail";
import artistDetailReducer from "../../redux/reducers/artist_detail.reducer";

function ArtistDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const {artistId} = useParams();
    

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);



    return ( <>
  
        <div>{store.artistDetail[0]?.artist_name}</div>
            <section className="albums">
            <div>{store.artistDetail.map(({album_title}) => (
                <AlbumDetail key={album_title} title={album_title} />
                ))}
            </div>

            </section>
       
        
        </>
    )
}

export default ArtistDetail;