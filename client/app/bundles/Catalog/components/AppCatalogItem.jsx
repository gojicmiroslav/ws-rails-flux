import React from 'react';
import AppActions from '../../../actions/app-actions';
import CartButton from '../../Cart/components/AppCartButton';

//stateless component
export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{props.item.title}</h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
			<p>{props.item.summary}</p>
			<p>Price: ${props.item.cost} <span className="label label-info text-success">
					{ props.item.qty && `(${props.item.qty}) in cart` }
				</span>
			</p>

			<CartButton handler={AppActions.addItem.bind(this, props.item)} txt="Add To Cart" />
		</div>
	);
};
