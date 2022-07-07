const BASE_API_URL = 'https://api.foursquare.com/v3';
const API_KEY = 'fsq36vWuvzc4ASQhuuv+TktgLmcCAI4WKFykx0ewzgChlkQ=';
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}

async function find(lat, long, query) {
    let latlong = lat + "," + long;
    let response = await axios.get(BASE_API_URL + "/places/search", {
        'headers': headers,
        "params": {
            'll': latlong,
            'query': query,
            'limit': 30
        }
    })
    return response.data;
}