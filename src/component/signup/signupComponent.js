import React, { useContext, useState } from 'react';
import './signupComponent.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { EventContext } from '../contextAPI/EventContext';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const SignupComponent = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState({ value: '', error: {} });
    const [lastName, setLastName] = useState({ value: '', error: {} });
    const [userName, setUserName] = useState({ value: '', error: {} });
    const [password, setPassword] = useState({ value: '', error: {} });
    const [openDatePicker, setOpenDatePicker] = useState(false);

    const [DOB, setDOB] = React.useState(new Date());
    const [state, setState] = React.useState({ age: '', name: '' });
    const [stateList, setStateList] = useState([
        {
            "code": "maha",
            "description": "Mahatashtra"
        },
        {
            "code": "up",
            "description": "Uttar Predesh"
        }
        , {
            "code": "mp",
            "description": "Madhya Pradesh"
        },
        {
            "code": "kar",
            "description": "Karnataka"
        },
        {
            "code": "ban",
            "description": "Banglore"
        }
    ]);

    const handleChange = (e) => {
        setState({ code: e.target.value });
    };

    const handleDateChange = (date) => {
        setDOB(date);
        setOpenDatePicker(false);

    };

    const { users, addUser } = useContext(EventContext);

    const submit = () => {
        const isValid = checkFormValidation();
        if (!isValid) {
            return;
        }
        const newUser = {
            id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            passwor: password.value
        }
        addUser([...users, newUser]);

    }

    const checkFormValidation = () => {
        const firstNameErr = {};
        const lastNameErr = {};
        let isValid = true;
        if (!firstName.value.length > 0) {
            firstNameErr.require = 'first name is required';
            isValid = false;
        }
        if (firstName.value.length < 2) {
            firstNameErr.len = 'first name should be greater than 2 characters';
            isValid = false;
        }

        if (!lastName.value.length > 0) {
            lastNameErr.require = 'last name is required';
            isValid = false;
        }

        if (lastName.value.includes(firstName.value)) {
            lastNameErr.require = 'last name should not containe first name';
            isValid = false;
        }

        setFirstName({ value: firstName.value, error: firstNameErr });
        setLastName({ value: lastName.value, error: lastNameErr });
        return isValid;
    }
    const handleFNameChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case 'fname':
                setFirstName({ value: value, error: firstName.error });
                break;
            case 'lname':
                setLastName({ value: value, error: lastName.error });
                break;
            case 'userName':
                setUserName({ value: value, error: userName.error });
                break;
            case 'password':
                setPassword({ value: value, error: password.error });
                break;

            default:
                break;
        }
    }
    const getValidationMessages = (errorObj) => {
        return (
            <div>
                {
                    Object.keys(errorObj).map(key => {
                        return <Alert key={errorObj[key]} severity="error">{errorObj[key]}</Alert>
                    })
                }
            </div>
        )
    }
    const handleKeypress = (e) => {
        e.preventDefault();
        return false
    }
    const onDateInputClick = () => {
        setOpenDatePicker(true);
    }

    return (
        <div className='signupSection'>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField className={'inputField'} label="First Name" id={'fname'} value={firstName.value} onChange={(event) => handleFNameChange(event)} variant="outlined" />
                {
                    getValidationMessages(firstName.error)
                }
                <TextField className={'inputField'} label="Last Name" id={'lname'} value={lastName.value} onChange={(event) => handleFNameChange(event)} variant="outlined" />
                {
                    getValidationMessages(lastName.error)
                }
                <TextField className={'inputField'} label="User Name" id={'userName'} value={userName.value} onChange={(event) => handleFNameChange(event)} variant="outlined" />
                {

                }
                <TextField className={'inputField'} label="Password" id={'password'} value={password.value} onChange={(event) => handleFNameChange(event)} variant="outlined" />
                {

                }
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Select Date of Birth"
                            format="dd-MM-yyyy"
                            value={DOB}
                            autoOk={true}
                            onClick={() => { onDateInputClick() }}
                            onKeyDown={(e) => { handleKeypress(e) }}
                            open={openDatePicker}
                            onChange={(e) => { handleDateChange(e) }}
                            allowKeyboardControl={false}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }
                            }
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
                    <Select
                        native
                        value={state.code}
                        onChange={handleChange}
                        label="State"
                        inputProps={{
                            name: 'State',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        {
                            stateList.map(x => { return <option key={x.code} value={x.code}>{x.description}</option> })
                        }
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={submit}>
                    Create
</Button>
            </form>
        </div>
    );
}

export default SignupComponent;

