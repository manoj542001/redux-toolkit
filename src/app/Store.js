import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { todoApi } from "../features/todolist/todoListSlice";
import { setupListeners } from '@reduxjs/toolkit/query'




export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
})
setupListeners(store.dispatch)


