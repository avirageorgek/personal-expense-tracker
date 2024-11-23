import React from "react";

import Table from "../components/Table";
import TitleWrapper from "../components/TitleWrapper";

import {useAppDispatch, useAppSelector} from "../store/hooks";

const ExpenseList = (): React.ReactNode => {

    const expensesList = useAppSelector(state => state.expensesList)

    return (
        <TitleWrapper title="Expense List">
            <div className="col-span-1" >
            </div>
            <div className="col-span-10 content-center" >
                <Table columns={[
                    {
                        id: "slNo",
                        name: "Sl. No",
                        key: "id"
                    }, {
                        id: "title",
                        name: "Title",
                        key: "title"
                    }, {
                        id: "amount",
                        name: "Amount",
                        key: "amount"
                    }, {
                        id: "date",
                        name: "Date",
                        key: "date"
                    }
                ]} data={expensesList}></Table>
            </div>
            <div className="col-span-1">
            </div>
        </TitleWrapper>
    );
}

export default ExpenseList;