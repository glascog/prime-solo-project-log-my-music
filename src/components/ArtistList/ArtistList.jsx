import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from "react-router-dom";
import AddAlbum from "../AddAlbum/AddAlbum";



function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return ( 
   
   <div className="nav-buttons">
         <div>
            <Link to='/add_album'><button>Add Album</button></Link>
        </div>
        <div>
            <Link to='/albums'><button>My Albums</button></Link>
        </div>
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
                        <Link to={`/artist_detail/${item.id}`}>{item.artist_name}</Link></td>
                    <td>{item.count}</td>
                </tr>
                ))}
        </tbody>
        
        </table>
   </div>
   </div>
   );
}

export default ArtistList;