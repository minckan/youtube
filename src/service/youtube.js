class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient
    }
    

    async mostPopular() {
        const res = await this.youtube.get('videos', {
            params: {
                part: 'snippet', chart: 'mostPopular', maxResults: 25
            }
        })
        return res.data.items
    }
    
    async search(query) {
        const res = await this.youtube.get('search', {
            params: {
                part: 'snippet', type: 'video', maxResults: 25, q: query
            }
        })
        return res.data.items
    }

}

export default Youtube
