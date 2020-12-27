import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { createContext, useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {

    const [loginUserData, setloginUserData] = useState({ id: '', firstName: '', lastName: '' });
    const [message, setMessage] = useState('');
    const [users, addUser] = useState([
        {
            "id": 1,
            "firstName": "Vinay",
            "lastName": "Revar",
            "userName": "vinay@123",
            "password": "123"
        },
        {
            "id": 2,
            "firstName": "Roshan",
            "lastName": "Shinde",
            "userName": "roshan@123",
            "password": "123"
        },
        {
            "id": 3,
            "firstName": "Akash",
            "lastName": "Kalewar",
            "userName": "akash@123",
            "password": "123"
        },
        {
            "id": 4,
            "firstName": "Ajay",
            "lastName": "Shelar",
            "userName": "ajay@123",
            "password": "123"
        },
        {
            "id": 5,
            "firstName": "Test",
            "lastName": "Test",
            "userName": "abc@",
            "password": "123"
        },
    ]);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [toasterSeverity, SetToasterSeverity] = useState(false);

    const handleClick = (seretity, message) => {
        SetToasterSeverity(seretity);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={20000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={toasterSeverity ? 'success' : 'error'}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
            <EventContext.Provider value={{ loginUserData, setloginUserData, users, addUser, handleClick, handleClose }}>
                {children}
            </EventContext.Provider>
        </div>
    )
}
