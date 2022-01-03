class Youtube {
    constructor(key) {
        this.key = key
        this.getRequstOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    

    mostPopular() {
        return fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC84-u2324bYVTkd1NHvA-qR0JkwEBTh0E", this.getRequstOptions)
        .then(response => response.json())
        .then(result => {result.items})
    }
    
    search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyC84-u2324bYVTkd1NHvA-qR0JkwEBTh0E`, this.getRequstOptions)
        .then(response => response.json())
        .then(result => result.items.map(item =>({...item , id: item.id.videoId})))
        .then(items => setVideo(items))
    }

}

export default Youtube
