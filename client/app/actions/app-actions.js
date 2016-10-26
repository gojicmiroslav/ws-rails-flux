import Constants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

const AppActions = {
	addItem(item){
		dispatch({
			actionType: Constants.ADD_ITEM,
			item: item
		});
	},

	removeItem(item){
		dispatch({
			actionType: Constants.REMOVE_ITEM,
			item: item
		});
	},

	increaseItem(tem){
		dispatch({
			actionType: Constants.INCREASE_ITEM,
			item: item
		});
	},

	decreaseItem(item){
		dispatch({
			actionType: Constants.DECREASE_ITEM,
			item: item
		});
	}
};

export default AppActions;