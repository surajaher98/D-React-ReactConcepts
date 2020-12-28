import React, { useEffect, useState } from 'react';
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



// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: 150,
//         height: 200,
//         border: '1px solid',
//         '&:hover': {
//             width: 140,
//             height: 190,
//         }

//     },
//     media: {
//         // height: 140,
//     },

// }));
const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 4, itemsToScroll: 2 },
    { width: 768, itemsToShow: 6, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 8, itemsToScroll: 2 }
];

class PlayListComponent extends React.Component {
    constructor() {
        super();
        const pr = this.props;

    }
    render() {
        return (<React.Fragment key={this.props.title}>

            <div className='playListTitle'>
                {this.props.title}
            </div>
            <Carousel breakPoints={breakPoints}>
                {this.props.items.length > 0 && this.props.items.map((item, index) => {
                    return <Card className={'imgCard'} onClick={() => { this.props.handlePlayListChanges(item) }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={item.album?.images[0]?.url ? item.album?.images[0]?.url : item.images[0]?.url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography variant="caption" display="block" gutterBottom>
                                    {item.name} {item.tracks?.total && (item.tracks?.total)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                })
                }
            </Carousel>
        </React.Fragment>
        )

    }

}

// const PlayListComponent = (props) => {
//     const classes = useStyles();
//     debugger;

//     useEffect(() => {
//     }, [])

//     return (<React.Fragment key={props.title}>

//         <div className='playListTitle'>
//             {props.title}
//         </div>
//         <Carousel breakPoints={breakPoints}>
//             {props.items.length > 0 && props.items.map((item, index) => {
//                 return <Card className={classes.root} onClick={() => { props.handlePlayListChanges(item) }}>
//                     <CardActionArea>
//                         <CardMedia
//                             component="img"
//                             className={classes.media}
//                             image={item.album?.images[0]?.url ? item.album?.images[0]?.url : item.images[0]?.url}
//                             title="Contemplative Reptile"
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h6" component="h6">
//                                 {item.name} {item.tracks?.total && (item.tracks?.total)}
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>

//                 </Card>
//             })
//             }
//         </Carousel>
//     </React.Fragment>)

// }
export default React.memo(PlayListComponent);