import { useMemo } from "react";
import { useTable,useSortBy } from "react-table";

const Table = ({column,data})=>{
    
    const COLUMN = useMemo(()=>column,[])
    const DATA = useMemo(()=>data,[])

    const TableInstance = useTable({
        columns:COLUMN,
        data:DATA
    },useSortBy)

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = TableInstance
      return (
        <table {...getTableProps}>
            <thead >
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
               
            </thead>
            <tbody  {...getTableBodyProps}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell =>{
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                                
                            </tr>

                        )
                    })
                }
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
      );
}

export default Table