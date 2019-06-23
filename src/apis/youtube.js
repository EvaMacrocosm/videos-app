import axios from 'axios';

const KEY = 'AIzaSyArfEJElbaFEmu4UFmu2v7QEPIsCljeJ7Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

