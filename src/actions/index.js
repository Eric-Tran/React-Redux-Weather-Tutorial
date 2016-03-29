import axios from 'axios';

const API_KEY = 'd5fc4eaf23d66ce6187000cacd74a22d';
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY; //original way
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //ES6 way

//export it to keep action types consistent between action reducers and action creators.
export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator: always returns an object with a type. Takes in user inputted city.
export function fetchWeather(city) {
	const url =`${ROOT_URL}&q=${city},us`;
	//npm install axios - used for making ajax like requests.
	//the request returns a promise.
	const request = axios.get(url);
	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		//payload contains additional data that describes the acction.
		payload: request
	};
}