import { useEffect, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import '../../../assets/css/Body/section3.css'
import BTC from '../../../assets/images/utility/btc.png'
import GIFTCARD from '../../../assets/images/utility/giftcard.png'
import USDT from '../../../assets/images/utility/usdt.png'
import axios from 'axios'
import moment from 'moment'
import LineChart from '../lineChart.js'
import Icon from "react-crypto-icons";
const Index = ()=>{
    const [loader,setloader] = useState(true);
    const [transactions,settransactions] = useState([]);
    const [activeBTC,setactiveBTC] = useState(true)
    const [activeUSDT,setactiveUSDT] = useState(false)
    const [clickChart,setClickChart] =  useState('BTC')
    
    const handleChart = (clicked)=>{
        
        setClickChart(clicked)
        if(clicked === "BTC"){
            setactiveBTC(true);
            setactiveUSDT(false)
        }
        if(clicked === "USDT"){
            setactiveUSDT(true);
            setactiveBTC(false)
        }
    }
    const getRecentTransactions =async ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        let btc_address = reactLocalStorage.getObject('user').btc_wallet[0].address;
        let usdt_address = reactLocalStorage.getObject('user').usdt_wallet[0].address;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/latest/transaction`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
            data:{btcaddress:btc_address,usdtaddress:usdt_address}
          })
        .then(res=>{
            setloader(false)
            settransactions(res.data)
            // console.log('RES',res.data)
           
           
        })
        .catch(err=>{
            // console.log(err.response)
            setloader(false)
            //seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })

    }

    useEffect(()=>{
        getRecentTransactions();
    },[])

    const opengiftcard = ()=>{
        window.location='/client/tradegiftcard'
    }

    const displayTransactions = ()=>{
        return !loader && transactions.length > 0 ?
        transactions.map((d,index)=>{
            return <div key={index} className="recent-transactions">   
                        <div className='asset-logo'>
                           {d.currency === "BTC" && <Icon name="btc" size={25}/> } 
                           {d.currency === "USDT" && <Icon name="usdt" size={25}/>  } 
                        </div>
                        <div className='coin-recent-transaction'>
                            {d.currency}
                        </div>
                        <div className='date-recent-transaction'>
                           
                           
                            {moment(d.date_created).format("DD/MM/YYYY")}
                        </div>
                        <div className='recent-amount'>
                           {d.amount}
                        </div>
                        <div className='status'>
                            Completed
                        </div>
                    </div>
        })
        
        
        
        
        
        :'No Record Found'
    }

    const transactionHistory = ()=>{
        window.location='/client/transactions-history'
    }
    return (
        <div className="body_section3">
           <div className='marketTransaction-list'>
                <div className='marketTRansaction-title'>
                    <div>
                        Recent Transactions
                    </div>
                    <div>
                        {
                            transactions.length > 0 && <div className='viewmore' onClick={()=>transactionHistory()}>View More</div>
                        }
                        
                    </div>
                </div>
                {
                    loader ? <div className='Chartloader'> </div> :<div> {displayTransactions()}</div>
                    
                }
                
              
                
               

               
               
            </div>
            <div className='walletbalance-list'>
                  
                    <div className='marketTitle'>
                        <div>
                            Transaction Overview
                        </div>
                        <div className='transDiv'>
                            <div className={activeBTC ? 'trans transFlex active':'trans transFlex'} onClick={()=>handleChart('BTC')}>
                                        BTC
                            </div>
                            <div className={activeUSDT ? 'trans transFlex active':'trans transFlex'} onClick={()=>handleChart('USDT')}>
                                        USDT
                            </div>
                            {/* <div className='trans transXflex' onClick={handleChart('BTC')}>
                                        ALL
                            </div> */}
                        
                        </div>
                    </div>
                    <LineChart getClicked = {clickChart}/>

               

                   
            </div>
        </div>
    )
}

export default Index;