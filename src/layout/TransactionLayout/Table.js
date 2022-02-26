import { useMemo } from "react";
import { useTable,useSortBy,useGlobalFilter } from "react-table";
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AiOutlineCaretUp} from 'react-icons/ai'
import GlobalFilter from './globalFilter'
const Table = ({column,data})=>{
    
    const COLUMN = useMemo(()=>column,[])
    const DATA = useMemo(()=>data,[])

    const TableInstance = useTable({
        columns:COLUMN,
        data:DATA
    },useGlobalFilter,useSortBy)

    

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter} = TableInstance

        const {globalFilter} = state
      return (
          <>
          <div className="globalClass"><GlobalFilter filter={globalFilter} setfilter={setGlobalFilter} /></div>
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
        </>
      );
}

export default Table