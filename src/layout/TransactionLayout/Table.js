import { useMemo } from "react";
import { useTable,useSortBy,useGlobalFilter,usePagination } from "react-table";
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AiOutlineCaretUp} from 'react-icons/ai'
import GlobalFilter from './globalFilter'
import {BiSkipPrevious} from 'react-icons/bi'
import {BiSkipNext} from 'react-icons/bi'
const Table = ({column,data})=>{
    
    const COLUMN = useMemo(()=>column,[])
    const DATA = useMemo(()=>data,[])

    const TableInstance = useTable({
        columns:COLUMN,
        data:DATA
    },useGlobalFilter,useSortBy,usePagination)

    

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
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
                    page.map(row=>{
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
        <div className="PrevNextCover">
            <div className="buttonNextPrev">
                <div onClick={()=>previousPage()} disabled={!canPreviousPage} > <BiSkipPrevious size={20}/>Previous  </div>
                <div onClick={()=>nextPage()} disabled={!canNextPage}><BiSkipNext size={20}/>Next  </div>
            </div>
        </div>
        
        </>
      );
}

export default Table