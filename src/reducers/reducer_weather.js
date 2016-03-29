import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
	//npm install: redux-promise stopped the action and once request finished it dispatches new action with payload of resolved request.
	console.log('Action recieved', action);
	switch (action.type) {
		case FETCH_WEATHER:
			//concat returns a new instance of state. .push will manipulate the state, which we don't want.
			// return state.concat([ action.payload.data ]); //old way
			return [ action.payload.data, ...state]; //ES6 returns [city, city, city] taking exising array, flattern out to make a new one.
	}
	return state;
}