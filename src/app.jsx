
import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './Components/video_list/video_list';
import Header from './Components/header/header';
import VideoDetail from './Components/video_detail/video_detail';

function App({youtube}) {
    const [videos, setVideo] = useState([])
    const [selectedVideo, setSelectVideo] = useState(null)

    const selectVideo = (video) => {
        setSelectVideo(video)
    }

    const handleSearch = useCallback(query => {
        setSelectVideo(null)
        youtube.search(query).then(videos => {
            setVideo(videos)
        })
    }, [youtube])

    useEffect(() => {
        youtube.mostPopular().then(videos => setVideo(videos))
    }, [youtube])

    return (
        <div className={ styles.app}>
            <Header onSearch={handleSearch}></Header>
            <section className={styles.content}>
                {
                    selectedVideo && (
                        <div className={styles.detail}> <VideoDetail video={selectedVideo}></VideoDetail></div>
                    )
                }
                <div className={styles.list}><VideoList videos={videos} onVideoClick={ selectVideo} display={selectedVideo ? 'list' : 'grid'}></VideoList></div>
            </section>
        </div>
    );
}

export default App;
