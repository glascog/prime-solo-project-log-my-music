import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';


function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return (
   <div>
        <p>This is where Artists will be listed in alphabetical order</p>

            <div>{store.artist.map((item, index) => (
                <div key={index}>
                    <p>{item.artist_name}</p>
                    </div>
                ))}
            </div>
   </div>
   )
}

export default ArtistList;