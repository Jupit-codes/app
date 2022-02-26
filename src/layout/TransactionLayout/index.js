import '../../assets/css/Transaction/transaction.css'
import empty from '../../assets/images/empty.png'
import DataTable from 'react-data-table-component';
import { useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Table from './Table';
import Spinner from '../../assets/images/spinner.gif'
import './table.css'
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
            data:{addressBTC:reactLocalStorage.getObject('user').btc_wallet[0].address,addressUSDT:reactLocalStorage.getObject('user').usdt_wallet[0].address}
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
    })

    


    const columns = [
        
        {
            Header:'Transaction Type',
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
            Header:'DateOfTransaction',
            accessor:'updated'
        },
        

    ]
    
    return (
        <div className="transaction">
                {Loading && <img src={Spinner}/>}
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
            {data .length > 0 && <Table  column={columns} data={data}/>}
                
       
        </div>
    )
}

export default Index