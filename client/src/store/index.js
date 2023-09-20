

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




export const store = configureStore({

    reducer: {
        
        [crokApi.reducerPath]: crokApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat( crokApi.middleware)
}, );