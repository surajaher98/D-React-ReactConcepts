import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EndPoints from './../../Constants/endPoints';
import _ from 'lodash'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
        background: 'black',
        color: 'white',
        width: '100%',
        '&:hover': {
            background: 'grey'
        },
    },
    specialBtn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        width: '100%'
    },



}));

const CategoriesComponent = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const config = new EndPoints();
    // const [token] = useState(config.Token);

    const [allCategories, setAllCategories] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, []
    );
    const getCategories = () => {
        axios.get(`${config.CategoriesUrl}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setAllCategories(response.data.categories.items);
                setCurrentCategories(response.data.categories.items);

            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    const handlePaginarionChange = (event, value) => {
        setPage(value);
        const startIndex = (value - 1) * 4;
        const endIndex = (value * 4) <= allCategories.length ? value * 4 : allCategories.length;
        const arr = _.slice(allCategories, startIndex, endIndex);
        setCurrentCategories(arr);
    };

    return (<div className={classes.root}>
        <Grid container spacing={2}>
            {
                currentCategories.length > 0 && currentCategories.map((item, index) => {
                    return index < 4 && <Grid item xs={3} key={item.id}>
                        <div>
                            <Button
                                className='cateBtn'
                                variant="contained"
                                size="large"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                onClick={() => { props.handlePlayListChanges(item.id, item.name) }}
                            >
                                {item.name}
                            </Button>
                        </div>
                    </Grid>
                }
                )
            }

            <Grid item xs={12}>
                <Typography>Page: {page}</Typography>
                <Pagination className='pagination' page={page} onChange={handlePaginarionChange} count={Math.ceil(allCategories.length / 4)} variant="outlined" color="secondary" />
            </Grid>

            <Grid item xs={3}>
                <Button className={classes.specialBtn}>Featured-playlists</Button>
                {/* https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=50 */}
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.specialBtn}>New Release</Button>
                {/* https://api.spotify.com/v1/browse/new-releases?country=IN */}
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.specialBtn}>New Mashup</Button>
                {/* https://api.spotify.com/v1/search?q=new%20mashup&type=track&market=IN*/}
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.specialBtn}>Old Mashup</Button>
                {/* https://api.spotify.com/v1/search?q=old%20mashup&type=track&market=IN */}
            </Grid>
        </Grid>
    </div>)
}

export default CategoriesComponent;