import React, { useState, useEffect } from 'react';
import {  Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export const HandlingStateInTextInput = () => {
    const useStyles = makeStyles(theme => ({
        outerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'pink',
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0',
        }
    }));
    const [data,setData]=useState("");
    const classes = useStyles();
    const onChangeHandler=(e)=>setData(e.target.value);
    return (
        <Box className={classes.outerContainer}>
            <input type="text" value={data} onChange={onChangeHandler}>
            </input>
            <h1>TEXT ENTERED BY USER IS {data}</h1>
		</Box>
    )
}
