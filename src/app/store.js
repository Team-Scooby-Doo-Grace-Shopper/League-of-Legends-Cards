import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import cartReducer from '../features/cart/cartSlice';
import cardsReducer from '../features/cards/cardsSlice';
import logger from 'redux-logger';
import ordersSlice from '../features/admin/ordersSlice';
import usersSlice from '../features/admin/usersSlice';

const rootReducer = combineReducers({ cards: cardsReducer,
	login:loginSlice, 
	orders:ordersSlice,
	users:usersSlice,cart: cartReducer });


export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
