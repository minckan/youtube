
import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './Components/video_list/video_list';
import Header from './Components/header/header';

function App({youtube}) {
    const [videos, setVideo] = useState([])

    const handleSearch = query => {
        youtube.search(query).then(console.log())
    }

    useEffect(() => {
        youtube.mostPopular().then(console.log('most popular'))
    }, [])

    return (
        <div className={ styles.app}>
            <Header onSearch={ handleSearch }></Header>
            <VideoList videos={videos}></VideoList>
        </div>
    );
}

export default App;
