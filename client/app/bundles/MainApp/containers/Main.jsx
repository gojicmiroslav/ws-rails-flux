import React, { PropTypes } from 'react';
import AppActions from  '../../../actions/app-actions';

export default class Main extends React.Component {
	render(){
		return (<div>
			<h1>Main App</h1>
			<button onClick={AppActions.addItem.bind(null, 'This is the Item')}>Test Action</button>
		</div>);
	}
}
