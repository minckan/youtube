
import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './Components/video_list/video_list';
import Header from './Components/header/header';

function App({youtube}) {
    const [videos, setVideo] = useState([])

    const handleSearch = query => {
        youtube.search(query).then(videos => setVideo(videos))
    }

    useEffect(() => {
        youtube.mostPopular().then(videos => setVideo(videos))
    }, [])

    return (
        <div className={ styles.app}>
            <Header onSearch={ handleSearch }></Header>
            <VideoList videos={videos}></VideoList>
        </div>
    );
}

export default App;
