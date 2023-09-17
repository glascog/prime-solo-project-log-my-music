import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

import './ArtistDetail.css'

function ArtistDetail() {

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const { artistId } = useParams();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);

    const handleAddAlbumClick = () => {
        history.push(`/add_album`)
    };

    const handleAlbumDetailClick = (props) => {
        let albumId = props
        history.push(`/album_detail/${albumId}`)
    }

    return (
        <>
            <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>{store.artistDetail[0]?.artist_name}</Typography>

            <Button onClick={() => handleAddAlbumClick()} startIcon={<LibraryAddIcon />}> Add Album</Button>

            <div className="card-container">
                {store.artistDetail?.map(({ album_title, id }) => (
                    <Card key={id} sx={{ width: 175, marginBottom: 10 }}>
                        <CardMedia
                            component="img"
                            height={140}
                            image={process.env.PUBLIC_URL + "/images/goldvinyl.png"}
                            alt={album_title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {album_title}
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <Button onClick={() => handleAlbumDetailClick(id)}>View Details</Button>

                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default ArtistDetail;
