import React, { useEffect } from 'react';
// import {useDispatch, useSelector} from "react-redux";
import { Typography } from "@mui/material";
import PhotoForm from '../../components/PhotoForm/PhotoForm';

const NewPhoto = ({history}) => {
    // const dispatch = useDispatch();
    // const categories = useSelector(state => state.categories.categories);
    // const error = useSelector(state => state.products.createProductError);
    // const loading = useSelector(state => state.products.createProductLoading);

    // useEffect(() => {
    //   dispatch(fetchAuthorsRequest());
    // }, [dispatch]);

    const onSubmit = photoData => {
        //   dispatch(createPhoto(photoData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4" m={2}>Add photo</Typography>
            <PhotoForm
                onSubmit={onSubmit}
            // error={error}
            // loading={loading}
            />
        </>
    )
}

export default NewPhoto;
