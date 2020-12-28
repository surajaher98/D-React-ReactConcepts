import React, { useState, useEffect } from 'react'
import axios from 'axios';
import EndPoints from './../../Constants/endPoints';
import _ from 'lodash';

import CategoriesComponent from '../Categories/categoriesComponent';
import PlayListComponent from '../playLists/playListComponent';
import SongsListComponent from '../SongsList/SongsListComponent';
import SearchIcon from "@material-ui/icons/Search";
import SearchBtnComponent from './../searchBaar/searchBtnComponent';


const MusicComponent = () => {
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedCatItems, setSelectedCatItems] = useState({ items: [], cateName: '' });
    const [allPlaylistData, setAllPlaylistData] = useState([]);
    const [tracks, setTracks] = useState({ playlistData: {}, tracksData: {} });
    const [nowPlaying, setNowPlaying] = useState([]);


    const config = new EndPoints();

    const handleCategoryChange = (cattegoryId, categoryName) => {
        setSelectedCat(cattegoryId);
        axios.get(`${config.PlayList.replace('cattegoryId', cattegoryId)}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setSelectedCatItems({ items: response.data.playlists.items, cateName: categoryName });
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
    const handlePlayListChange = (playlist) => {
        // setSelectedCat(cattegoryId);
        if (playlist.type === 'track') {
            onTrackSelect(playlist);
            return;
        }
        debugger;
        let url = `https://api.spotify.com/v1/${playlist.type}s/${playlist.id}/tracks`;
        // url = playlist.type === "playlist" ? playlist.tracks.href : playlist.href;
        axios.get(`${url}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setTracks({ playlistData: playlist, tracksData: response.data });
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
    // const handlePlayListChange = (playlist) => {
    //     debugger
    //     // setSelectedCat(cattegoryId);
    //     axios.get(`${playlist.tracks.href}`, { headers: { Authorization: `Bearer ${config.Token}` } })
    //         .then(response => {
    //             setTracks({ playlistData: playlist, tracksData: response.data });
    //         })
    //         .catch((error) => {
    //             console.log('error ' + error);
    //         });
    // }
    useEffect(() => {
        getPanjabiTracks();
        getMostTrendingSongs();
        getNewReleaseData();
        getMashupSongs();
        marathiSongs();
        getTopTracks();
        getSadSongs();
        getMostViewSongs();
        getcurrentYearSongs();
        getHeartBreakSongs();
        getFeaturedPlayList();
        getPanjabiSongs();
        getRepriseSongs();
        // handlePlayListChange('https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb/tracks');
    }, [])

    const getRepriseSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=reprise&type=track%2Calbum&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                debugger
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Reprise songs', playListItems: response.data.tracks.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getNewReleaseData = () => {
        axios.get(`https://api.spotify.com/v1/browse/new-releases?country=IN`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'albums', playListItems: response.data.albums.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getPanjabiTracks = () => {
        axios.get(`https://api.spotify.com/v1/playlists/37i9dQZF1DX5baCFRgbF3x/tracks`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Panjabi tracks', playListItems: response.data.tracks.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getcurrentYearSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=year%3A2020&type=track%2Calbum&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: '2020', playListItems: response.data.albums.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    }
    const marathiSongs = () => {
        axios.get(`https://api.spotify.com/v1/browse/categories/marathi/playlists?country=IN`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Marathi Playlist', playListItems: response.data.tracks.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };
    const getMostTrendingSongs = () => {
        axios.get(`https://api.spotify.com/v1/browse/categories/pop/playlists?country=IN`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Trending Songs', playListItems: response.data.playlists.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getTopTracks = () => {
        axios.get(`https://api.spotify.com/v1/me/top/tracks`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'My Top Tracks', playListItems: response.data.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };
    const getHeartBreakSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=Bollywood%20Heartbreak&type=track%2Calbum&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Heartbreak songs', playListItems: response.data.tracks.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };
    const getSadSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=sad&type=track%2Calbum&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Sad songs', playListItems: response.data.tracks.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };
    const getMashupSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=mashup&type=track%2Calbum&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Mashup albums', playListItems: response.data.albums.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };


    const getMostViewSongs = () => {
        axios.get(`https://api.spotify.com/v1/search?q=MostView&type=album`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Most viewed albums', playListItems: response.data.albums.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getPanjabiSongs = () => {
        axios.get(`https://api.spotify.com/v1/browse/categories/punjabi/playlists?country=IN&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'Panjabi', playListItems: response.data.playlists.items }
                // allPlaylistData.push(obj);
                // setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };

    const getFeaturedPlayList = () => {
        axios.get(`https://api.spotify.com/v1/browse/featured-playlists?country=IN`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                const obj = { key: Math.floor(Math.random() * (999 - 100 + 1) + 100), playListTitle: 'playlists', playListItems: response.data.playlists.items }
                //   allPlaylistData.push(obj);
                //  setAllPlaylistData([...allPlaylistData, obj]);
                setAllPlaylistData(allPlaylistData => [...allPlaylistData, obj]);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
    // const getAllPlaylistData = () => {
    //     axios.get(`https://api.spotify.com/v1/browse/new-releases?country=IN`, { headers: { Authorization: `Bearer ${config.Token}` } })
    //         .then(response => {
    //             console.log('new release', response.data.albums.items);
    //             const obj = { playListTitle: 'albums', playListItems: response.data.albums.items }
    //             setAllPlaylistData([...allPlaylistData, obj]);
    //             debugger
    //         })
    //         .catch((error) => {
    //             console.log('error ' + error);
    //         });
    //     axios.get(`https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
    //         .then(response => {
    //             const obj = { playListTitle: 'playlists', playListItems: response.data.playlists.items }
    //             setAllPlaylistData([...allPlaylistData, obj]);
    //         })
    //         .catch((error) => {
    //             console.log('error ' + error);
    //         });
    //     console.log('allPlaylistData', allPlaylistData);
    // };

    const onTrackSelect = (track) => {
        debugger
        setNowPlaying(track);
        // if (document.getElementsByClassName('b8 b9 ba ao bb bc bd be bf bg bh bi bj').length > 0) {
        //     document.getElementsByClassName('b8 b9 ba ao bb bc bd be bf bg bh bi bj')[0].click()
        // }
        // setRandom(random + 1);
        // document.getElementsByClassName('d8 d9 da db')[0].style.display = 'none'
        //  playMusicButtonClick();

    }
    const playMusicButtonClick = () => {
        console.log('start');
        setTimeout(() => {
            if (document.getElementsByClassName('b8 b9 ba ao bb bc bd be bf bg bh bi bj').length > 0) {
                document.getElementsByClassName('b8 b9 ba ao bb bc bd be bf bg bh bi bj')[0].click()
            }
        }, 10000);
        console.log('end');
    }
    return (
        <React.Fragment>
            <SearchBtnComponent handlePlayListChanges={handlePlayListChange} />
            <CategoriesComponent handlePlayListChanges={handleCategoryChange} />
            {
                selectedCatItems.items.length > 0 && <PlayListComponent key={selectedCatItems.cateName} title={selectedCatItems.cateName} items={selectedCatItems.items} handlePlayListChanges={handlePlayListChange} />
            }
            {/* {
                allPlaylistData.length > 0 && <PlayListComponent key='' title={'PlayList'} items={allPlaylistData[0]} handlePlayListChange={handlePlayListChange} />
            } */}
            <div>
                {
                    allPlaylistData.length >= 2 && allPlaylistData.map(item => {
                        // return item
                        return <PlayListComponent key={item.playListTitle} title={item.playListTitle} items={item.playListItems} handlePlayListChanges={handlePlayListChange} />
                    }
                    )
                }
                {
                    // <SongsListComponent onTrackSelect={onTrackSelect} />

                    tracks.tracksData?.items?.length > 0 && <SongsListComponent key={tracks.playlistData.id} currentPlaylistTracks={tracks} onTrackSelect={onTrackSelect} />

                }
                {
                    nowPlaying?.id && <iframe id={'iFrameId'} src={`https://open.spotify.com/embed/track/${nowPlaying?.id}`} width="1200" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                }

            </div>
        </React.Fragment>
    )
}

export default MusicComponent;