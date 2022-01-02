
import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './Components/video_list/video_list';


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

    return (
        <VideoList videos={videos}></VideoList>
    );
}

export default App;
