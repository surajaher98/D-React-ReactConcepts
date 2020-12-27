import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Dropdown } from 'semantic-ui-react'
import _ from 'lodash';
import { DataGrid } from '@material-ui/data-grid';
import EndPoints from './../../Constants/endPoints';
import SongDetailCard from '../SongDetails/songDetailCard';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

import CategoriesComponent from '../Categories/categoriesComponent';


const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);

const SportifyComponent = () => {
    const [authCode, setAuthCode] = useState(new URLSearchParams(useLocation().search).get('code'));
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    const config = new EndPoints();
    const [baseUrl] = useState('https://accounts.spotify.com/');
    const [apiBaseUrl] = useState('https://api.spotify.com/');
    const playListcolumns = [
        { field: 'description', headerName: 'Playlist Title', width: 400 },
        { field: 'totalTracks', headerName: 'Tracks', width: 70 }
    ];
    const songsColumns = [
        { field: 'id', headerName: 'No', width: 30 },
        { field: 'name', headerName: 'Song', width: 300 },
        { field: 'duration', headerName: 'Duration', width: 30 },
    ];

    const [playListRows, setPlayListRows] = useState([]);
    const [categoriesOptions, setCategoriesOptions] = useState([]);
    const [songsRows, setSongsRows] = useState([]);
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);

    const [title, setTitle] = useState('');

    const [sportifyToken, setSportifyToken] = useState('BQACvDj1023jyY3WvzKQQAM2a7yKj9HWEuUL5NM8VIAd6clP26HwD44KX9xqs5xrX4Cyf-N-a4F0n1fPMdUH1GYfjoxY98I5hxrSX7D4yQ_sfJzlHdxEnpXwPf4hdmUgcH0YbfftNTybVhO7dXV6pLAlRjdDGU5FBXa3UfsjFTqXlK7hgw');

    const options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const body = {
        grant_type: 'authorization_code',
        code: 'AQB6EcF58nyBWPeuSs_koktnFQ74C8pTv2UHj3ro6SyskV02JSlDkpM9qKGFDIy7fXbChfEvNtLwGbukm8jspu9PRUqFyVVIUgb7CfSlwBpRgJt0WOOVBiFDdtKxIX2Ldrbok-VyIDNkxc5TMMCYCtzut_ioOqxELVLEL51SvGQ538jrq-uT0PLtjhqaK1aMMbIQgOEI8VSwc1y1Qq-DVa6PhJCFCw',
        redirect_uri: 'http://localhost:3000/sportify',
        client_id: '654c7484fce14022bd0ec15f605a0bd3',
        client_secret: '80455513ed344fd5b8c96667ae6a6e8c',
    }

    const getAuthCode = () => {
        axios.get(`${baseUrl}${config.AuthCodeUrl}`
        ).then(response => {

            window.open(response.config.url, '_blank');

            console.log(response)
        }).catch(error => {
            console.log(error.response)
        })

    }

    useEffect(() => {
        if (!authCode) {
            getAuthCode();
        }

        // axios.post(`${baseUrl}${config.TokenUrl}`, qs.stringify(body), options
        // ).then(response => {
        //     console.log(response)
        // }).catch(error => {
        //     debugger
        //     console.log(error.response)
        // })
        //  setCategoryDropdown(JSON.parse(localStorage.getItem("cate")))
        // axios.get(`${apiBaseUrl}${config.CategoriesUrl}`, { headers: { Authorization: `Bearer ${sportifyToken}` } })
        //     .then(response => {
        //         localStorage.setItem("cate", JSON.stringify(response.data));
        //         console.log(response.data);
        //         setCategoryDropdown(response.data);
        //     })
        //     .catch((error) => {
        //         console.log('error ' + error);
        //     });
    }, []);

    const setCategoryDropdown = (categories) => {
        let categoryList = [];
        // need to change the below object 
        categories.categories.items.map(item => {
            const category = {
                key: item.id,
                text: item.name,
                value: item.id,
                image: { avatar: true, src: item.icons[0].url },
            }
            categoryList.push(category);

        })
        setCategoriesOptions(categoryList);
    }
    const handleCategoryChange = (event) => {
        const id = _.find(categoriesOptions, ['text', event.target.textContent]).key;
        getPlayListOptions(id);
    }

    const getPlayListOptions = (cattegoryId) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/browse/categories/${cattegoryId}/playlists?limit=50`, { headers: { Authorization: `Bearer ${sportifyToken}` } })
            .then(response => {
                console.log('plaulist ' + response);
                setPlaylistRows(response.data.playlists);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }


    const setPlaylistRows = (playListData) => {
        let playList = [];

        playListData.items.map(x => {
            const item = {
                id: x.id,
                description: x.description,
                images: x.images[0].url,
                totalTracks: x.tracks.total,
                tracksUrl: x.tracks.href

            }
            playList.push(item);
        })
        setPlayListRows(playList);
    }
    const onChangePageHandler = (page) => {
    }

    const onRowSelect = (row) => {
        // const re = selectedPlaylists;
        // const result = _.find(selectedPlaylists, data.row.id);
        // debugger;
        if (row.isSelected) {
            GetTracksAllTracks(row.data.tracksUrl, row.data.id);
        }
        else {
            _.remove(songsRows, (x) => {
                return x.playListId === row.data.id;
            });
            const data = songsRows
            setSongsRows(data);
        }
    }
    const GetTracksAllTracks = (trackURL, id) => {
        axios.get(`${trackURL}`, { headers: { Authorization: `Bearer ${sportifyToken}` } })
            .then(response => {
                console.log('tracks ', response);
                SetTracks(response.data.items, id)
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    const SetTracks = (items, id) => {
        const songRows = [...songsRows];
        items.map((x, index) => {
            const track = {
                id: index + 1,
                artist: x.track.artists,
                duration: millisToMinutesAndSeconds(x.track.duration_ms),
                external_urls: x.track.external_urls,
                href: x.track.href,
                name: x.track.name,
                popularity: x.track.popularity,
                preview_url: x.track.preview_url,
                playListId: id
            }
            songRows.push(track)
        })
        setSongsRows(songRows);
    }
    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    // const setSelection = (data) => {
    //     const res = _.differenceWith(selectedPlaylists, data.rowIds, _.isEqual)
    //     let unCh = arr_diff(selectedPlaylists, data.rowIds);
    //     if (data.rowIds.length > selectedPlaylists.length) {
    //         console.log('new element is added')
    //     } else {
    //         console.log('deleted');
    //     }
    //     setSelectedPlaylists(data.rowIds);
    // }

    const arr_diff = (a1, a2) => {
        var a = [], diff = [];
        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }
        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }
        for (var k in a) {
            diff.push(k);
        }
        return diff;
    }
    const onRowHoverHandler = (params) => {
        setTitle(params.row.name);
    }

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);

    return (<div>
        <CategoriesComponent />
        {/* <div>
            <Dropdown
                placeholder='Select Category'
                fluid
                selection
                options={categoriesOptions}
                onChange={(e) => handleCategoryChange(e)}
            />
        </div>
        <div style={{ height: 400, width: '45%' }}>
            <DataGrid rows={playListRows} columns={playListcolumns} pageSize={5} checkboxSelection
                onPageChange={(params) => {
                    onChangePageHandler(params);
                }} onRowSelected={(param) => { onRowSelect(param) }} />
        </div>
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid rows={songsRows} columns={songsColumns} pageSize={5} onPageChange={(params) => {
                onChangePageHandler(params);
            }} onRowHover={(params) => { onRowHoverHandler(params) }} />
        </div>

        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                    {"It's very engaging. Right?"}
                </React.Fragment>
            }
        >
            <Button >HTML</Button>
        </HtmlTooltip> */}
    </div>
    )
}

export default SportifyComponent