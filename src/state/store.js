import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducers/index.js";
// import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: reducers,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;