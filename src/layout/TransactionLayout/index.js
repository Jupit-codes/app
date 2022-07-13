import '../../assets/css/Transaction/transaction.css'
import empty from '../../assets/images/empty.png'
import DataTable from 'react-data-table-component';
import { useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Table from './Table';
import Spinner from '../../assets/images/spinner.gif'
import './table.css'

// import { Table } from 'react-bootstrap';
// import DataTable from 'react-data-table-component';


const Index = ()=>{
    const [data,setdata] = useState([]);
    const [error,seterror] = useState();
    const[Loading,setLoading] = useState(true)
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    const getTransaction = async()=>{
        await axios({
            method: "POST",
            url: `${Base_url}/user/getAllTransactions`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
            data:{addressBTC:reactLocalStorage.getObject('user').btc_wallet[0].address,addressUSDT:reactLocalStorage.getObject('user').usdt_wallet[0].address,virtual_account:reactLocalStorage.getObject('user').virtual_account}
          })
        .then(res=>{
            setLoading(false)
            
           setdata(res.data)
        
        })
        .catch(err=>{
            
            seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })
    }



        useEffect(()=>{
            getTransaction();
        },[])

        // const columns = [
        //     {
        //         name: 'TransactionID',
        //         selector: row => row.title,
        //         sortable: true,
        //     },
        //     {
        //         name: 'Date',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'FromAddress',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'ToAddress',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'Coin',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'Amount',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'Note',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        //     {
        //         name: 'Status',
        //         selector: row => row.year,
        //         sortable: true,
        //     },
        // ];
        
        // const datarep = [
        //     {
        //         id: 1,
        //         title: 'Beetlejuice',
        //         year: '1988',
        //     },
        //     {
        //         id: 2,
        //         title: 'Ghostbusters',
        //         year: '1984',
        //     },
        // ]


    const columns = [
        
        {
            Header:'Type',
            accessor:'type'
        },
       
        {
            Header:'Currency',
            accessor:'currency'
        },
        {
            Header:'Amount',
            accessor:'amount'
        },
        {
            Header:'Fees',
            accessor:'fees'
        },
        {
            Header:'From_Address',
            accessor:'from_address'
        },
        {
            Header:'To_Address',
            accessor:'to_address'
        },
        {
            Header:'Status',
            accessor:'status'
        },
        {
            Header:'Date',
            accessor:'updated'
        },
        

    ]

    const _renderEmpty = ()=>{
        return   <div className='empty'>
                            <h1>NO RECORD FOUND</h1>
                            <img src={empty}/>
                     </div>
    }
    
    return (
        <div className='history'>
            
                {Loading && <div style={{display:'flex',width:'100%',justifyContent:'center'}}>Loading Data..</div>}
                {/* {data && data.length === 0 && 
                <div>
                        <div className="th-title">
                            All Transactions
                        </div>
                        <div className="empty">
                            <img src={empty}/>
                            <div>No Transaction</div>
                        </div>
                </div>
                } */}
                <div className='tableDiv'>
                    {data.length > 0 && <Table  column={columns} data={data}/>}
                    {!Loading && data.length === 0 && _renderEmpty()}
                </div>
           
                
                {/* <div>
                        <DataTable
                            columns={columns}
                            data={datarep}
                        />
                </div> */}
        </div>
    )
}

export default Index