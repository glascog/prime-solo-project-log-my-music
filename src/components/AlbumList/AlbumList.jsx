import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';


function AlbumList() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ALBUM_LIST' });
    }, [dispatch]);

   return (
   <div>
        <p>My Albums</p>

            <div>{store.album.map((item, index) => (
                <div key={index}>
                    <p>{item.album_title} by {item.artist_name}</p>
                    </div>
            ))}
        </div>
   </div>
   );
}

export default AlbumList;