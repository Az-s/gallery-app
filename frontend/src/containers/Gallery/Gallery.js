import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Grid, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { Link , useParams} from 'react-router-dom';
import { fetchPhotosRequest } from '../../store/actions/photoActions';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSpinner from '../../components/UI/ProgressSpinner/ProgressSpinner';

const Gallery = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.photos);
    const fetchPhotosLoading = useSelector(state => state.photos.fetchPhotosLoading)
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchPhotosRequest());
    }, [dispatch]);

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (image) => {
        setTempImgSrc(image);
        setModel(true);
    };

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <ImageList sx={{ margin: '1rem' }} >
                <ImageListItem key="Subheader" cols={6}>
                    <Grid item container justifyContent="space-between" alignItems="center">
                        <Grid item >
                            <ListSubheader component="div">Gallery</ListSubheader>
                        </Grid>
                        {user?.role === 'user' && (
                            <Grid item>
                                <Button coloe="primary" component={Link} to="/add_photo">
                                    <AddPhotoAlternateRoundedIcon />
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </ImageListItem>
                {fetchPhotosLoading ? (
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <ProgressSpinner />
                        </Grid>
                    </Grid>
                ) : photos.map((item) => (
                    <ImageListItem key={item._id} id={item._id} className='image'>
                        <img
                            src={`${item.image}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            onClick={() => getImg(item.image)}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.user.name}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    component={Link} to={"/user_photos/" + item.user._id}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}


export default Gallery;
