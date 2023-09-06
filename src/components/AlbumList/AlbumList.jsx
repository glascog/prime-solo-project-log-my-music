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
    <table className="album-table">
        <thead>
        <tr>
        <th>Album Title</th>
        <th>Artist Name</th>
        <th>Add Note</th>
        </tr>
        </thead>

            <tbody>{store.album.map((item, index) => (
                <tr key={index}>
                    <td>{item.album_title}</td>
                    <td>{item.artist_name}</td>
                    <td><button>Add Note</button></td>
                </tr>
            ))}
        </tbody>
       

    </table>
   </div>
   );
}

export default AlbumList;