import React, { Component } from 'react';
import './css/App.css';

//  components
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';


class App extends Component {

	state = {
		error: '',
		query: {},
		result: {}
	}

	componentDidMount() {
		this.setState({
			error: false
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.query !== this.state.query){
			this.queryApi();
		}
	}

	queryApi = () => {
		const { city, country } = this.state.query;
		if(!city || !country) {
			return null
		}

		//	leer la url y agregar el API key
		const apiId = 'f9b032d3dfbb5a228af1254b6aa151a5';
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

		//	query con fecth api
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					result: data
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	queryData = (search) => {
		if (search.city === '' || search.country === '') {
			this.setState({
				error: true
			})
		} else {
			this.setState({
				error: false,
				query: search
			})
		}
	}

	render() {

		//	Mesaje de error
		const error = this.state.error;

		let result;
		let result2;

		if(error) {
			result = <Error message="Todos los campos son Obligatorios!" />
		} else {
			result2 = <Weather result={this.state.result}/>
		}

		return (
			<div>
				<Header title = 'React App Clima' />
				{result}					
				<Form queryData = {this.queryData} />
				{result2}			
			</div>
		)
	}
}

export default App;
