import {useForm} from "react-hook-form"

import {useAppDispatch} from "../store/hooks";
import {addExpense} from "../slice/Expense/expensesListSlice";
import { nanoid } from "@reduxjs/toolkit";

interface ExpenseFormItems {
    title: string
    amount: number
    date: Date
    category: number
}

const AddExpenseForm = (): React.ReactNode => {

    const dispatch = useAppDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm<ExpenseFormItems>({
        defaultValues: {
            title: "",
            amount: 0,
            date: new Date(),
            category: 0
        }
    });

    const onSubmit = (data: ExpenseFormItems) => {
        console.log(data);

        dispatch(addExpense({
            id: nanoid(),
            title: data.title,
            amount: data.amount,
            date: data.date
        }))

    }

    return (
        <div className="border border-slate-400 border-solid rounded shadow-md p-4 content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container mx-auto px-4 mb-5">
                    <label className="text-xl w-full block">Title</label>
                    <input {...register("title", {
                        required: "This field is required"
                    })} className="border border-slate-400 border-solid rounded h-8 shadow-md p-2" />
                    <p>{errors.title?.message}</p>
                </div>
                <div className="container mx-auto px-4 mb-5">
                    <label className="text-xl w-full block">Amount</label>
                    <input {...register("amount")} className="border border-slate-400 border-solid rounded h-8 shadow-md  p-2" />
                </div>
                <div className="container mx-auto px-4 mb-5">
                    <label className="text-xl w-full block">Date</label>
                    <input type="date" {...register("date")} className="border border-slate-400 border-solid rounded h-8 shadow-md  p-2" />
                </div>
                <div className="container mx-auto px-4 mb-5">
                    <label className="text-xl w-full block">Category</label>
                    <input {...register("category")} className="border border-slate-400 border-solid rounded h-8 shadow-md p-2" />
                </div>

                <div  className="container mx-auto px-4 mb-5">
                    <button className="px-4 py-2 border border-slate-400 border-solid bg-blue-600 text-white">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddExpenseForm;