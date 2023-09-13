import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';
import { Global } from '@mantine/core';


function ArtistList() {

    const dispatch = useDispatch();
    const store = useReduxStore();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_LIST' });
    }, [dispatch]);

   return ( 
   
   <div className="nav-buttons">
         <div>
            <Link to='/add_album'><Button color='gray' >Add Album</Button></Link>
            <Link to='/albums'><Button color='gray'>My Albums</Button></Link>
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