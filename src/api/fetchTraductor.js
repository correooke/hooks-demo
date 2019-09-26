import axios from 'axios';

const getUrl = word => `http://localhost:3001/traductor/${word}`;


const fetchTraductor = word => {
    console.log("fetching....", word);
    return axios.get(getUrl(word)).then(r => r.data);
}

export default fetchTraductor;