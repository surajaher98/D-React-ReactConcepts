import './LoginComponent.css';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

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


const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

function LoginComponent() {
    const classes = useStyles();
    const [credentials, setCredentials] = useState({ UserName: '', Password: '' });
    const [userNameError, setUserNameError] = useState({});
    const [passwordError, setPasswordError] = useState({});

    const { loginUserData, setloginUserData, users, addUser, handleClick, handleClose } = useContext(EventContext);

    const checkFormValidation = () => {
        const userNameErr = {};
        const passwordErr = {};
        let isValid = true;
        if (!credentials.UserName) {
            userNameErr.required = "Username is required";
            isValid = false;
        }

        if (credentials.UserName.trim().length < 2 || credentials.UserName.trim().length > 5) {
            userNameErr.LengthError = "Username should be between length 2 and 5 characters";
            isValid = false;
        }
        if (!credentials.UserName.trim().includes('@')) {
            userNameErr.atTheRateError = "Username should be contain @";
            isValid = false;
        }
        if (!credentials.Password) {
            passwordErr.required = "Password is required";
            isValid = false;
        }
        setUserNameError(userNameErr);
        setPasswordError(passwordErr);
        return isValid;
    }

    const submit = () => {
        const valid = checkFormValidation();
        if (!valid) {
            return;
        }
        let result = _.find((users), (user) => {
            if (user.userName == credentials.UserName && user.password == credentials.Password) {
                return true;
            }
        });
        if (result != undefined) {
            setloginUserData({ id: result.id, firstName: result.firstName, lastName: result.lastName })
            localStorage.setItem('currentUser', JSON.stringify(result));
            handleClick(true, 'Success');
        } else {
            handleClick(false, 'Authentication failed Please try again');
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
        <div className='border'>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="UserName" label="UserName" variant="outlined" value={credentials.UserName} onChange={handleInputChange}
                />
                {
                    Object.keys(userNameError).map(key => {
                        return <Alert severity="error" className='validationError' key={userNameError[key]}>{userNameError[key]}</Alert>
                    })
                }
                <br />

                <TextField id="Password" label="Password" variant="outlined" value={credentials.Password} onChange={handleInputChange} />
                {
                    Object.keys(passwordError).map(key => {
                        return <Alert severity="error" className='validationError' key={passwordError[key]}>{passwordError[key]}</Alert>
                    })
                }
                <br />
                <Button variant="contained" className='loginbtn' color="primary" onClick={submit}>
                    Login
</Button>
            </form>
        </div>
    );
}


export default LoginComponent;
