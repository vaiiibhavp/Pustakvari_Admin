import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slice/AuthSlice";

// const middleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const rootReducer = {
  AuthUser: AuthSliceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
