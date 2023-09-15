import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useReduxStore from '../../hooks/useReduxStore';
import { useParams, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AlbumIcon from '@mui/icons-material/Album'

function ArtistDetail() {

    const dispatch = useDispatch();
    const store = useReduxStore();
    const { artistId } = useParams();


    useEffect(() => {
        dispatch({ type: 'FETCH_ARTIST_DETAIL', payload: Number(artistId) });
    }, [dispatch]);



    return (
        <>
            <Link to='/add_album'>
                <Button>Add Album</Button>
            </Link>

            <div>
                {store.artistDetail?.map(({ album_title, id }) => (
                    <Card key={id} sx={{ width: 175, marginBottom: 10 }}>
                        <CardMedia
                            component="img"
                            height={140}
                            image={process.env.PUBLIC_URL + "/images/tealvinyl.png"}
                            alt={album_title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {album_title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/album_detail/${id}`}>
                                <Button>View Details</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default ArtistDetail;
