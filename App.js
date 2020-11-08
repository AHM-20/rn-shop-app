import React from 'react';
import ShopNavigator from './navigation/ShopNavigator';
//import reducers and combine them in a rootReducer then create a store
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
	products: productReducer
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}
