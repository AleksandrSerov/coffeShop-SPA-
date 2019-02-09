import React, { Component } from 'react';
import './app.sass';
import Main from '../Main/Main';
import CoffePage from '../CoffePage/CoffePage';


class App extends Component {
	render() {
		return (
			<div className="App">
			{/* <Main/> */}
			<CoffePage/>
			</div>
		);
	}
}

export default App;
