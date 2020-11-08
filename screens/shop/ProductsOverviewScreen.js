import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
	//get availableProducts state from store using useSelector function
	const products = useSelector((state) => state.products.availableProducts);

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						//navigate to detail screen and passing item id as a prop
						props.navigation.navigate('ProductDetail', {
							productId: itemData.item.id,
							productTitle: itemData.item.title
						});
					}}
					onAddToCart={() => {}}
				/>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
