import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import CoffeService from '../../services/СoffeService';
import './bestItems.sass';

class BestItems extends Component {
	service = new CoffeService();
	render() {
		return (
			<div className="bestItems">
				<section className="best">
					<div className="container">
						<div className="title">Our best</div>
						<div className="row">
							<div className="col-lg-10 offset-lg-1">
								<div className="best__wrapper">
									<ItemList getData={this.service.getBestItems}/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default BestItems;
