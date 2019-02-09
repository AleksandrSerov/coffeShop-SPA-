import React, { Component } from 'react';
import './app.sass';
import Main from '../Main/Main';
import CoffePage from '../CoffePage/CoffePage';
import ItemPage from '../ItemPage/ItemPage';
import GoodsPage from '../GoodsPage/GoodsPage';

import { BrowserRouter as Router, Route} from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Router>
				<>
					<Route exact path="/" component={Main}/>
					<Route path="/ourCoffe" component={CoffePage}/>
					<Route path="/forYour" component={GoodsPage}/>

				</>
			</Router>
		);
	}
}

export default App;
