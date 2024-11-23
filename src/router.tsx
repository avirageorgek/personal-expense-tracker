import {
    createBrowserRouter
} from "react-router-dom";

import ExpenseList from "./pages/ExpenseList";
import AddExpense from "./pages/AddExpense";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ExpenseList />
    }, {
        path: "/add-expense",
        element: <AddExpense />
    }
]);

export default router