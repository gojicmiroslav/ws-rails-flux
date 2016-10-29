import React, { PropTypes } from 'react';
import AppActions from  '../../../actions/app-actions';
import AppStore from '../../../stores/app-store';
import Catalog from '../../Catalog/containers/AppCatalog'
import Cart from '../../Cart/containers/AppCart'

export default class Main extends React.Component {
	render(){
		return (<div>
			<h1>Main App</h1>
			<Catalog />
			<Cart />
		</div>);
	}
}
