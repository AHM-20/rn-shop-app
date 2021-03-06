import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const ProductNavigator = createStackNavigator(
	{
		ProductOverview: ProductOverviewScreen,
		ProductDetail: ProductDetailScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
		}
	}
);

export default createAppContainer(ProductNavigator);
