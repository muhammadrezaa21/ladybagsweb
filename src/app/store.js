import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../features/banner/bannerSlice";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";
import catalogReducer from "../features/catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
    catalog: catalogReducer,
  },
});
