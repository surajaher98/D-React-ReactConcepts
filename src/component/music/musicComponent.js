import React, { useState, useEffect } from 'react'
import axios from 'axios';
import EndPoints from './../../Constants/endPoints';
import _ from 'lodash';

import CategoriesComponent from '../Categories/categoriesComponent';
import PlayListComponent from '../playLists/playListComponent';
import SongsListComponent from '../SongsList/SongsListComponent';


const MusicComponent = () => {
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedCatItems, setSelectedCatItems] = useState([]);
    const [allPlaylistData, setAllPlaylistData] = useState([]);
    const [tracks, setTracks] = useState({ playlistData: {}, tracksData: {} });
    const [nowPlaying, setNowPlaying] = useState([]);


    const config = new EndPoints();

    const handleCategoryChange = (cattegoryId) => {
        setSelectedCat(cattegoryId);
        axios.get(`${config.PlayList.replace('cattegoryId', cattegoryId)}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setSelectedCatItems(response.data.playlists.items);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
    const handlePlayListChange = (playlist) => {
        // setSelectedCat(cattegoryId);
        axios.get(`${playlist}`, { headers: { Authorization: `Bearer ${config.Token}` } })
            .then(response => {
                setTracks(...tracks, { playlistData: {}, tracksData: response.data });
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
        getNewReleaseData();
        getFeaturedPlayList();
        // handlePlayListChange('https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb/tracks');
    }, [])

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

    const getFeaturedPlayList = () => {
        axios.get(`https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=50`, { headers: { Authorization: `Bearer ${config.Token}` } })
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
            <CategoriesComponent handleCategoryChange={handleCategoryChange} />
            {
                selectedCatItems.length > 0 && <PlayListComponent key='cate' title={'Playlist'} items={selectedCatItems} handlePlayListChange={handlePlayListChange} />
            }
            {allPlaylistData.length}

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
                {tracks.tracksData?.items}
                {
                    <SongsListComponent onTrackSelect={onTrackSelect} />

                    // !_.values(tracks).some(x => x !== undefined) && <SongsListComponent currentPlaylistTracks={tracks} />

                }
                {
                    nowPlaying?.track?.id && <iframe id={'iFrameId'} src={`https://open.spotify.com/embed/track/${nowPlaying?.track?.id}`} width="1200" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                }

            </div>
        </React.Fragment>
    )
}

export default MusicComponent;