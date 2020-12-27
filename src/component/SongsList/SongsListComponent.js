import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './SongsListComponent.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import Favorite from '@material-ui/icons/Favorite'
import Schedule from '@material-ui/icons/Schedule'
import People from '@material-ui/icons/People'
import axios from 'axios';
import EndPoints from './../../Constants/endPoints';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // height: 700,
        border: '1px solid'

    },
    songsPaper: {
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        // height: 30,
        border: '1px solid'

    },
}));
const SongsListComponent = (props) => {
    let prop = {};
    const classes = useStyles();
    const config = new EndPoints();
    const [tracks, setTracks] = useState({ playlistData: {}, tracksData: {} });

    useEffect(() => {
        handlePlayListChange('https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb/tracks');
    }, [])

    const handlePlayListChange = (playlist) => {
        // setSelectedCat(cattegoryId);
        axios.get(`${playlist}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setTracks({ tracksData: response.data });
                //  prop = { tracksData: response.data };
                // setTracks(...tracks, { playlistData: {}, tracksData: response.data });
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }



    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>
                            {/* <img src={prop.currentPlaylistTracks?.images[0]?.url} className="card-img-top" alt="..."></img> */}
                            <img src='https://i.scdn.co/image/ab67616d0000b273d2f35b3cbb1d0ecd79bcea77' className="card-img-top" alt="..."></img>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper className={classes.songsPaper}>
                            <span className={'trackNo'}>No</span>
                            {/* play btn */}
                            <span className={'trackLikes'}> <Favorite /></span>
                            <span className={'trackTitle'}>Title</span>
                            <span className={'trackArtist'}>Artist</span>
                            <span className={'trackDuration'}><Schedule /></span>
                        </Paper>
                    </Grid>
                    {
                        tracks.tracksData.items?.length > 0 && tracks.tracksData.items.map((track, index) => {
                            return <Grid item xs={12}>
                                <Paper className={classes.songsPaper}>
                                    <span className={'trackNoValue'}>{index + 1}</span>
                                    {/* play btn */}
                                    <span className={'trackLikesValue'}>{track.track.popularity}<Favorite /></span>
                                    <span className={'trackTitleValue'}>{track.track.name}</span>
                                    <span className={'trackArtistValue'}>{track.track.artists[0].name}</span>
                                    <span className={'trackDurationValue'}>{millisToMinutesAndSeconds(track.track.duration_ms)}</span>
                                    <Button onClick={() => { props.onTrackSelect(track) }} color="primary">
                                        Play</Button>
                                </Paper>

                            </Grid>
                        })
                    }
                </Grid>
            </div>
        </div>

    )
}
export default SongsListComponent;