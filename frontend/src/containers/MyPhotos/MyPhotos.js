import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, ListSubheader, IconButton, Grid, Button, ImageListItemBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto, fetchPhotosRequest } from '../../store/actions/photosActions';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import ProgressSpinner from '../../components/UI/ProgressSpinner/ProgressSpinner';

const MyPhotos = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.photos);
    const fetchPhotosLoading = useSelector(state => state.photos.fetchPhotosLoading)
    const user = useSelector(state => state.users.user);
    const params = useParams();

    useEffect(() => {
        dispatch(fetchPhotosRequest(params.id));
    }, [dispatch, params.id]);

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (image) => {
        setTempImgSrc(image);
        setModel(true);
    };

    const removePhoto = id => {
        dispatch(deletePhoto(id));
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
                            <ListSubheader component="div">My Photos</ListSubheader>
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
                                user ?
                                    <IconButton aria-label="delete" size="small" onClick={() => removePhoto(item._id)}>
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                    : null
                            }
                        />
                        {/* {user ?
                            <IconButton aria-label="delete" size="small" onClick={() => removePhoto(item._id)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            : null
                        } */}
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default MyPhotos;
