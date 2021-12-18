import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyPhotos = () => {
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
        <div>
            
        </div>
    )
}

export default MyPhotos;
