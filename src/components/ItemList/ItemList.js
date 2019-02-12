import React, { Component } from 'react';
import './itemList.sass';

class ItemList extends Component {
	state = {
		itemList: null
	}
	componentDidMount() {
		const {getData} = this.props;
		console.log(this.props);
		getData()
		.then(itemList => {
			console.log(itemList);
			this.setState({
				itemList
			})
		})
	}
	renderItems(arr) {
		return arr.map((item, index) => {
			const id = index;
			return (
				<div key = {id} className="best__item">
					<img src={item.url} alt={item.name}/>
					<div className="best__item-title">{item.name}</div>
					<div className="best__item-price">{item.price}</div>
				</div>
			)
		})
	}
	render() {
		const {itemList} = this.state;
		console.log(itemList);
		if (!itemList) {
			return null;
		}
		const items = this.renderItems(itemList);
		return (
			<>
			{items}
			</>
		)
	}
}

export default ItemList;
