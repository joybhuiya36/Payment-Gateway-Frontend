import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import cartCountReducer from "./slices/cartCountSlice";
import bookCartReducer from "./slices/bookCartSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  cartCount: cartCountReducer,
  bookCart: bookCartReducer,
});
