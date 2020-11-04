import PRODUCTS from '../../data/dummy-data';

const initialState = {
	availableProducts: PRODUCTS,
	useProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1') //dummy setup
};

export default (state = initialState, action) => {
	return state;
};
