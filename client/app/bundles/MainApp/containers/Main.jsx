import React, { PropTypes } from 'react';

import HelloWorld from '../../HelloWorld/containers/HelloWorld';

export default class Main extends React.Component {
	render(){
		return (<div>
			<h1>Main App</h1>
			<HelloWorld />
		</div>);
	}
}
