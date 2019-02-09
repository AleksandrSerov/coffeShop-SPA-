import React, { Component } from 'react';
import './app.sass';
import Main from '../Main/Main';
import CoffePage from '../CoffePage/CoffePage';
import ItemPage from '../ItemPage/ItemPage';



class App extends Component {
	render() {
		return (
			<div className="App">
			{/* <Main/> */}
			{/* <CoffePage/> */}
			<ItemPage/>

			</div>
		);
	}
}

export default App;
