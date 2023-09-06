import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from "react-router-dom";


function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return (
   <div>
    <table className="artist-table">
        <thead>
        <tr>
        <th>Artist</th>
        <th>Number of Albums</th>
        </tr>
        </thead>
       
        <tbody>{store.artist.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Link to={`/artist_detail/${item.artist_name}`}>{item.artist_name}</Link></td>
                    <td>{item.count}</td>
                </tr>
                ))}
        </tbody>
        
        </table>
   </div>
   );
}

export default ArtistList;