import React, { Component } from 'react';
//making searchbar into a container. Goal is to hook up fetchWeather to SearchBar container.
//step1: import connect, bindActionCreators.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};

		//need these lines to set this.setState or "this" will be undefined.
		//overriding the local method
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		//tells browser to not submit the form
		event.preventDefault();
		//Now we need to go fetch weather data;
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					//whenever a callback has a reference to "this" (this.setState), it needs to be binded as in above.
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//step 2: Goal is to hook up actionCreator fetchWeather to the SearchBar container.
//whatever action creator fetchWeather is called and returns an action, action flows through middleware and all reducers.
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//pasing null because mapDispatchToProps is always sceond argument. there is no mapStateToProps so null.
//mapStateToProps gives us access to fetchWeather action creator.
export default connect(null, mapDispatchToProps)(SearchBar);