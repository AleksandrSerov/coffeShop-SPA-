class CoffeService {
	constructor() {
		this._data = '/db.json';
	}
	getAllData = async () => {
		const res = await fetch(`${this._data}`);
		return res.json();
	}
	getBestItems = async () => {
		const res = await this.getAllData();
		return await res.bestsellers;
	}

}

export default CoffeService;