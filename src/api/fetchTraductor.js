
const getUrl = word => `http://localhost:3001/traductor/${word}`;


const fetchTraductor = word => {
    return fetch(getUrl(word)).then(resp => resp.json());
}

export default fetchTraductor;