import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const rootReducer = combineReducers({
  
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(middleware),
});
//sagaMiddleware.run({});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
