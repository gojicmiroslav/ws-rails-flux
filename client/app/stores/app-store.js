import { dispatch, register } from '../dispatchers/app-dispatcher';
import Constants from '../constants/app-constants';
import { EventEmitter } from 'events';

var _catalog = [];

//populate catalog
for(let i = 1; i < 9; i++){
	_catalog.push({
		'id': 'Widget' + i,
		'title': 'Widget #' + i,
		'summary': 'A great widget',
		'description': 'Widget description',
		'cost': i
	});
}

var _cartItems = [];

const _removeItem = (item) => {
	_cartItems.splice(_cartItems.findIndex(i => i === item), 1);
};

const _findCartItem = (item) => {
	return _cartItems.find( cartItem => cartItem.id === item.id);
};

const _increaseItem = (item) => item.qty++;

const _decreaseItem = (item) => {
	item.qty--;
	if(item.qty === 0){
		_removeItem(item);
	}
};

const _addItem = (item) => {
	const cartItem = _findCartItem(item);

	if(!cartItem){
		_cartItems.push(Object.assign({ qty: 1}, item));
	} else {
		_increaseItem(item);
	}
};

const _cartTotals = ( qty = 0, total = 0) => {
	_cartItems.forEach( cartItem => {
		qty += cartItem.qty;
		total += cartItem.qty * cartItem.cost;
	});

	return {qty, total};
};

const AppStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit(Constants.CHANGE_EVENT);
	},

	addChangeListener(callback){
		this.on(Constants.CHANGE_EVENT, callback);
	},

	removeChangeListener(callback){
		this.removeChangeListener(Constants.CHANGE_EVENT, callback);
	},

	getCart(){
		return _cartItems;
	},

	getCartTotals(){
		return _cartTotals();
	},

	getCatalog(){
		return _catalog.map(item => {
			return Object.assign({}, 
				item,
				_cartItems.find(cartItem => cartItem.id === item.id)
			);
		});
	},

	//this key is if we have multiple stores, multiple dispatchers
	dispatcherIndex: register(function(action){
		switch(action.actionType){
			case Constants.ADD_ITEM:
				_addItem(action.item);
				break;
			case Constants.REMOVE_ITEM:
				_removeItem(action.item);
				break;
			case Constants.INCREASE_ITEM:
				_increaseItem(action.item);
				break;
			case Constants.DECREASE_ITEM:
				_decreaseItem(action.item);
				break;
		}

		AppStore.emitChange();
	})	

});

export default AppStore;