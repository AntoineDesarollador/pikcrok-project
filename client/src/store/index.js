

// import { configureStore } from "@reduxjs/toolkit";
// import teaReducer from "./slice/tea";

// const store = configureStore({
//     reducer: {
//         tea: teaReducer,
//     },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { crokApi } from "./slice/service/crokAPI.js";
import { auth } from "./slice/service/auth";


export const store = configureStore({

    reducer: {
        [crokApi.reducerPath]: crokApi.reducer,
        [auth.reducerPath]: auth.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat( crokApi.middleware, auth.middleware)
}, );