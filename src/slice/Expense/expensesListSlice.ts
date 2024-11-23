import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../../store/store";

type ExpensesListState = {
    id: string,
    title: string,
    amount: number,
    date: Date
}

const initialState: ExpensesListState[] = [];

export const expensesListSlice = createSlice({
    name: "expensesList",
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<ExpensesListState>) => {
            state.push(action.payload)
        }
    }

});

export const {addExpense} = expensesListSlice.actions;

export const selectExpensesList = (state: RootState) => state.expensesList

export default expensesListSlice.reducer