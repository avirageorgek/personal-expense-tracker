import React from "react";

type TableProps = {
    columns: {
        id: string,
        name: string,
        key: string
    }[],
    data: {
        [index: string]: any
    }[]
}


const Table: React.FC<TableProps> = ({columns, data}) => {
    return (
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {
                        columns.map((item) => {
                            return <th key={item.id} className="px-12 py-3">{item.name}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b border-x-2 dark:bg-gray-800 dark:border-gray-700">
                    {
                        data.map((d) => {
                            return columns.map((col) => {
                                return <td key={d.key} className="px-12 py-4">{d[col.key]}</td>
                            })
                            
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default Table;