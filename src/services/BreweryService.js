import axios from 'axios';

const http = axios.create({
    baseURL: "https://api.openbrewerydb.org/v1/"
});

export default {
    getBreweries() {
        return http.get('/breweries')
    }
}