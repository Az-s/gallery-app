import React, { useState } from "react";
import { Grid, TextField , Button } from "@mui/material";
import FormElement from "../UI/Form/FormElement";
import ProgressBtn from '../UI/ProgressBtn/ProgressBtn'; 

const PhotoForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        title: "",
        image: null,
    });

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return { ...prevState, [name]: file };
        });
    };

    const getFieldError = fieldName => {
        try {
            // return error.errors[fieldName].message;
        } catch (e) {
            return undefined;
        }
    };

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            autoComplete="off"
            onSubmit={submitFormHandler}
            noValidate
        >
     
            <FormElement
                required
                label="Title"
                name="title"
                value={state.title}
                onChange={inputChangeHandler}
                error={getFieldError('title')}
            />

            <Grid item xs>
                <TextField
                    type="file"
                    name="image"
                    onChange={fileChangeHandler}
                    error={Boolean(getFieldError('image'))}
                    helperText={getFieldError('image')}
                    sx={{width: 500}}
                />
            </Grid>

            <Grid item xs>
                <ProgressBtn
                    type="submit"
                    variant="contained"
                    color="primary"
                    // loading={loading}
                    // disabled={loading}
                >
                    Create
                </ProgressBtn>
            </Grid>
        </Grid>
    )
}

export default PhotoForm;
