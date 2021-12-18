import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Grid, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import { Link } from 'react-router-dom';
import { fetchPhotosRequest } from '../../store/actions/photoActions';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSpinner from '../../components/UI/ProgressSpinner/ProgressSpinner';


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];

const Gallery = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.photos);
    const fetchPhotosLoading = useSelector(state => state.photos.fetchPhotosLoading)
    const user = useSelector(state => state.users.user);

    useEffect(() => {
        dispatch(fetchPhotosRequest());
    }, []);

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (img) => {
        setTempImgSrc(img);
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
                        <Grid item>
                            <Button coloe="primary" component={Link} to="/add_photo">
                                <AddPhotoAlternateRoundedIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </ImageListItem>
                {user?.role === 'user' && (
                    <Grid item>
                        <Button coloe="primary" component={Link} to="/add_photo">
                            <AddPhotoAlternateRoundedIcon />
                        </Button>
                    </Grid>
                )}
                {itemData.map((item) => (
                    <ImageListItem key={item.img} className='image'>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => getImg(item.img)}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}

                {fetchPhotosLoading ? (
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <ProgressSpinner />
                        </Grid>
                    </Grid>
                ) : photos.map((item) => (
                    <ImageListItem key={item._id} className='image'>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            onClick={() => getImg(item.img)}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.user}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    component={Link} to="/add_photo"
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
