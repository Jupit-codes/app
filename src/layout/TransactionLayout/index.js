import '../../assets/css/Transaction/transaction.css'
import empty from '../../assets/images/empty.png'
import DataTable from 'react-data-table-component';
import { useEffect, useState,useMemo } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import Table from './Table';
import Spinner from '../../assets/images/spinner.gif'
import './table.css'
import { flexbox } from '@mui/system';

// import { Table } from 'react-bootstrap';
// import DataTable from 'react-data-table-component';


const Index = ()=>{
    const [data,setdata] = useState([]);
    const [error,seterror] = useState();
    const[Loading,setLoading] = useState(true)

    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })

      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }


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
            console.log(res.data)
           setdata(res.data)
        
        })
        .catch(err=>{
            
            seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })
    }



        useEffect(()=>{
            getTransaction();
        },[])

        useEffect(() => {
            window.addEventListener('resize', detectSize)
        
            return () => {
              window.removeEventListener('resize', detectSize)
            }
          }, [windowDimenion])

       
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
 //
    const renderTransactionForMobile  =()=>{
        return data.length && data.map((d,index)=>{
                
            if(d.type== "Receive" || d.type == "Deposit"){
                return <div key={index} style={{backgroundColor:'#00a693',width:'100%',height:'20%',borderRadius:10,marginBottom:10,display:'flex',flexDirection:'column',padding:10,justifyContent:'start',alignItems:'start',color:'#fff'}}>
                            <div style={{fontSize:18,fontWeight:'bold'}}>{d.type}</div>
                            <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5}}>amount :</span>{d.amount}</div>
                            <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5}}>currency:</span>{d.currency}</div>
                            {d.type == "Receive" && <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5 }}>from_address :</span>{d.from_address}</div>}
                            {d.type == "Deposit" && <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5 }}>from_address :</span>{d.serial}</div>}
                        </div>
            }
            if(d.type== "Send" || d.type == "Withdrawal"){
                return <div key={index} style={{backgroundColor:'#FF7F7F',width:'100%',height:'20%',borderRadius:10,marginBottom:10,display:'flex',flexDirection:'column',padding:10,justifyContent:'start',alignItems:'start',color:'#fff'}}>
                            <div style={{fontSize:18,fontWeight:'bold'}}>{d.type}</div>
                        </div>
            }
            if(d.type== "Buy" || d.type == "Sell"){
                return <div key={index} style={{backgroundColor:'#A47FFF',width:'100%',height:'20%',borderRadius:10,marginBottom:10,display:'flex',flexDirection:'column',padding:10,justifyContent:'start',alignItems:'start',color:'#fff'}}>
                             
                             <div style={{fontSize:18,fontWeight:'bold'}}>{d.type}</div>
                            <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5}}>amount :</span>{d.amount}</div>
                            <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5}}>currency:</span>{d.currency}</div>
                            {d.type == "Buy"  && <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5 }}>from_address :</span>Internal Transfer</div>}
                            {d.type == "Sell" && <div><span style={{fontWeight:'bold',fontSize:13,marginRight:5 }}>from_address :</span>Internal Transfer</div>}
                        </div>
            }
        })
    }

    
    return (
        <div className='history'>
              <div className='notifyTitle'>TRANSACTION HISTORY</div>
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
                  
                    {windowDimenion.winWidth > 900 && data.length > 0 && <Table  column={columns} data={data}/>}
                    {windowDimenion.winWidth < 900 && data.length >0 && renderTransactionForMobile()}
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