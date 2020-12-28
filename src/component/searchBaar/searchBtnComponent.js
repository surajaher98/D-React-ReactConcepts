
import React, { useEffect, useState } from 'react';
import './searchBtnComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchSharp from '@material-ui/icons/SearchSharp'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import _ from 'lodash'

import axios from 'axios'
import EndPoints from './../../Constants/endPoints';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    textField: {
        width: '25ch',
    },
}));


const SearchBtnComponent = (props) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState({});
    const config = new EndPoints();
    const [showLoading, setShowLoading] = React.useState(false);


    const handleChange = (event) => {
        setSearchResult({});
        setSearchValue(event.target.value);
        if (event.target.value.trim().length > 3) {
            setShowLoading(true);
            getSearchResult();
        } else {
            setShowLoading(false);
            setSearchResult({});
        }
    };

    useEffect(() => {

    }, [])

    const getSearchResult = () => {
        setSearchResult({});
        axios.get(`https://api.spotify.com/v1/search?q=${searchValue}&type=album,artist,track&limit=10`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setShowLoading(false);
                const item = _.unionBy(response.data?.albums?.items, response.data?.tracks?.items, response.data?.artists?.items);
                setSearchResult(item);
            })
            .catch((error) => {
                setShowLoading(false);
                console.log('error ' + error);
            })
    };

    const handleSearchItemSelect = (item) => {
        props.handlePlayListChanges(item)
    }


    return (<Grid container spacing={3}>
        <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search Song, Artist</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={searchValue}
                    onChange={(e) => { handleChange(e) }}
                    startAdornment={<InputAdornment position="start"><SearchSharp /></InputAdornment>}
                    labelWidth={120}
                    endAdornment={<InputAdornment position="start">{showLoading && <i className="fa fa-spinner fa-spin"></i>}</InputAdornment>}
                    onBlur={() => { setSearchValue(''); }}
                />
            </FormControl>
            {searchResult.length > 0 && <List dense className={classes.root}>
                {searchResult.map((item, index) => {
                    return (
                        <ListItem key={index} button onClick={() => handleSearchItemSelect(item)} className='searchResultRow'>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${index + 1}`}
                                    src={item?.images?.length > 0 && item?.images[2]?.url}
                                    src={item?.album?.images?.length > 0 && item?.album?.images[2]?.url}
                                //   src=''
                                />
                            </ListItemAvatar>
                            <ListItemText id={item.id} primary={item.name} />
                        </ListItem>
                    );
                })}
            </List>
            }
        </Grid>
    </Grid>)
}

export default SearchBtnComponent;