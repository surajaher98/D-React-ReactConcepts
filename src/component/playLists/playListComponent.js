import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './playListComponent.css';
import Grid from '@material-ui/core/Grid';
import LibraryMusic from '@material-ui/icons/LibraryMusic'
import Carousel from 'react-elastic-carousel';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 241,
        border: '1px solid'
    },
    media: {
        height: 140,
    },

}));


const PlayListComponent = (props) => {
    const classes = useStyles();

    useEffect(() => {
    }, [])

    return (<React.Fragment>

        <div className='playListTitle'>
            {props.title}
        </div>
        <Grid container spacing={3}>
            {
                props.items.length > 0 && props.items.map((item, index) => {
                    return index < 4 &&
                        <Grid item xs={3} key={item.id}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={item.images[0]?.url}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}  <><LibraryMusic /> {item.tracks?.total}</>
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color="primary" onClick={() => { props.handlePlayListChanges(item) }}>
                                                Play
                                        </Button>
                                        </CardActions>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>

                }
                )}
        </Grid>
    </React.Fragment>)

}
export default React.memo(PlayListComponent);