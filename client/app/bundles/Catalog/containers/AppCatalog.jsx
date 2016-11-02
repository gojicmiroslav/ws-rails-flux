import React from 'react';
import AppStore from '../../../stores/app-store';
import CatalogItem from '../components/AppCatalogItem';

//get components initial state
function getCatalog(){
	return {
		items: AppStore.getCatalog()
	};
}

console.log(getCatalog());

class Catalog extends React.Component {
	constructor(){
		super();
		this.state = getCatalog();
		this._onChange = this._onChange.bind(this);
	}

	componentWillMount() {
		AppStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);	
	}

	_onChange(){
		this.setState(getCatalog);
	}

	render(){
		let items = this.state.items.map(item => {
			return <CatalogItem key={item.id} item={item} />;
		});

		return (
			<div className="row">
				{items}
			</div>
		);
	}
}

export default Catalog;
