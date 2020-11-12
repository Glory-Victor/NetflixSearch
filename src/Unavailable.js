import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// Ref: https://material-ui.com/styles/basics/
const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    content: {
        textAlign: 'center',
        fontFamily: 'metropolis',
        fontSize: '30px',
        marginBottom: '20px',
        color: '#39414d',
    },
    button: {
        position: 'relative',
        top: '50%',
    }
});

const Unavailable = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <p className={classes.content}>
                Data Unavailable
            </p>
            {/* Ref: https://material-ui.com/components/buttons/ */}
            <Button className={classes.button} variant="contained" size="medium" color="primary" onClick={() => history.push('/')}>
                Go home
            </Button>
        </div>
    )
}

export default Unavailable;
