import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore(
  {
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  },
  applyMiddleware(thunk)
);

export default store;
