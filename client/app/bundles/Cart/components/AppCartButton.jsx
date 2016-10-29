import React from 'react';

//stateless component
export default (props) => {
	return (
		<button className="btn btn-default btn-sm" onClick={props.handler}>{props.txt}</button>
	)
};