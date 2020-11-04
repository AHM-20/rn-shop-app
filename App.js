import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import reducers and combine them to create a store
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
	products: productReducer
});
const store = createStore(rootReducer);

export default function App() {
	return <Provider store={store} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
