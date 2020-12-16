import './LoginComponent.css';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { EventContext } from './../contextAPI/EventContext';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}));

function LoginComponent() {
    const classes = useStyles();
    const [credentials, setCredentials] = useState({ UserName: '', Password: '' });

    const { loginUserName, setLoginUserName, users, addUser, handleClick, handleClose } = useContext(EventContext);

    const submit = () => {
        let result = _.find((users), (user) => {
            if (user.userName == credentials.UserName && user.password == credentials.Password) {
                return true;
            }
        });
        if (result != undefined) {
            handleClick(true);
        } else {
            handleClick(false);
        }

    }

    const handleInputChange = (e) => {
        if (e.target.id === 'UserName') {
            setCredentials({ ...credentials, UserName: e.target.value });
        }
        if (e.target.id === 'Password') {
            setCredentials({ ...credentials, Password: e.target.value });
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="UserName" label="UserName" variant="outlined" value={credentials.UserName} onChange={handleInputChange} />
            <br />
            <TextField id="Password" label="Password" variant="outlined" value={credentials.Password} onChange={handleInputChange} />
            <br />
            <Button variant="contained" color="primary" onClick={submit}>
                Primary
</Button>
        </form>
    );
}

export default LoginComponent;
