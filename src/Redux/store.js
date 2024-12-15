import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import registerReducer from './slices/registerSlice';
import productsReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import productsByCategoryReducer from './slices/productsByCategorySlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
  },
});
