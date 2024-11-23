import {configureStore} from "@reduxjs/toolkit";

import expensesListReducer from "../slice/Expense/expensesListSlice";

export const store = configureStore({
    reducer: {
        expensesList: expensesListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;