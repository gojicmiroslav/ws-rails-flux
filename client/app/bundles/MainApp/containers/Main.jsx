import React, { PropTypes } from 'react';
import AppActions from  '../../../actions/app-actions';
import AppStore from '../../../stores/app-store';

console.log(AppStore.getCatalog());

export default class Main extends React.Component {
	render(){
		return (<div>
			<h1>Main App</h1>
		</div>);
	}
}
