import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import { fetchPhotosRequest , createPhotoRequest} from '../../store/actions/photoActions';

const NewPhoto = ({ history }) => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.products.createProductError);
    const loading = useSelector(state => state.products.createProductLoading);

    useEffect(() => {
        dispatch(fetchPhotosRequest());
    }, [dispatch]);

    const onSubmit = photoData => {
        dispatch(createPhotoRequest(photoData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4" m={2}>Add new photo</Typography>
            <PhotoForm
                onSubmit={onSubmit}
                error={error}
                loading={loading}
            />
        </>
    )
}

export default NewPhoto;
