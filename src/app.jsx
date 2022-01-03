
import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './Components/video_list/video_list';
import Header from './Components/header/header';

function App() {
    const [videos, setVideo] = useState([])

    useEffect(() => {
        console.log('use effect');
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC84-u2324bYVTkd1NHvA-qR0JkwEBTh0E", requestOptions)
            .then(response => response.json())
              .then(result => {
                  setVideo(result.items)
                  
            })
            .catch(error => console.log('error', error));
    }, [])

    const handleSearch = useCallback((value) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyC84-u2324bYVTkd1NHvA-qR0JkwEBTh0E`, requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item =>({...item , id: item.id.videoId})))
            .then(items => setVideo(items))
            .catch(error => console.log('error', error));
    })

    return (
        <div className={ styles.app}>
            <Header onSearch={ handleSearch }></Header>
            <VideoList videos={videos}></VideoList>
        </div>
    );
}

export default App;
