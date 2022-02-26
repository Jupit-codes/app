import { useMemo } from "react";
import { useTable,useSortBy } from "react-table";
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AiOutlineCaretUp} from 'react-icons/ai'

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
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                       {column.isSorted ? (column.isSortedDesc ? <AiOutlineCaretDown size={10}/>:<AiOutlineCaretUp size={10}/>): ''}
                                    </span>

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