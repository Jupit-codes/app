import '../../assets/css/Transaction/transaction.css'
import empty from '../../assets/images/empty.png'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];
const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
const Index = ()=>{
    return (
        <div className="transaction">
                {/* <div className="th-title">
                     All Transactions
                </div>
                <div className="empty">
                    <img src={empty}/>
                    <div>No Transaction</div>
                </div> */}
        <DataTable
            columns={columns}
            data={data}
        />
        </div>
    )
}

export default Index