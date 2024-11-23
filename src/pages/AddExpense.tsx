import React from "react";

import Button from "../components/Button";
import TitleWrapper from "../components/TitleWrapper";
import AddExpenseForm from "../components/AddExpenseForm";

const AddExpense: React.FC<{}> = () => {
    return (
        <TitleWrapper title="Add Expense">
            <AddExpenseForm />
        </TitleWrapper>
    );
}

export default AddExpense;