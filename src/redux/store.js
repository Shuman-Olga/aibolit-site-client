import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api/Api";

const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
export default store;
