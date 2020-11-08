import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {
	//get id from navigation param
	const productId = props.navigation.getParam('productId');
	//get product using id from redux state
	const selectedProduct = useSelector((state) =>
		state.products.availableProducts.find((prod) => prod.id === productId)
	);

	return (
		<View>
			<Text>{selectedProduct.title}</Text>
		</View>
	);
};

ProductDetailScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	};
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
