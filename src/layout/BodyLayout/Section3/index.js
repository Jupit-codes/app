import { useEffect, useState } from 'react'
import { reactLocalStorage } from 'reactjs-localstorage'
import '../../../assets/css/Body/section3.css'
import BTC from '../../../assets/images/utility/btc.png'
import GIFTCARD from '../../../assets/images/utility/giftcard.png'
import USDT from '../../../assets/images/utility/usdt.png'
import axios from 'axios'
import moment from 'moment'
const Index = ()=>{
    const [loader,setloader] = useState(true);
    const [transactions,settransactions] = useState([]);
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
            console.log('RES',res.data)
           
           
        })
        .catch(err=>{
            console.log(err.response)
            setloader(false)
            //seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })

    }

    useEffect(()=>{
        getRecentTransactions();
    },[])

    const displayTransactions = ()=>{
        return !loader && transactions.length > 0 ?
        transactions.map((d,index)=>{
            return <div key={index} className="recent-transactions">   
                        <div className='asset-logo'>
                           {d.currency === "BTC" && <img src={BTC}/> } 
                           {d.currency === "USDT" && <img src={USDT}/> } 
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
                    loader ? <div className='Chartloader'> </div> : displayTransactions()
                    
                }
                
                {/* <div className="recent-transactions">
                    <div className='asset-logo'>
                        <img src={BTC}/>
                    </div>
                    <div className='coin-recent-transaction'>
                        Bitcoin
                    </div>
                    <div className='date-recent-transaction'>
                        10:45:16AM
                    </div>
                    <div className='recent-amount'>
                        +1545,00
                    </div>
                    <div className='status'>
                        Completed
                    </div>
                </div> */}
                {/* <div className="recent-transactions">
                    <div className='asset-logo'>
                        <img src={BTC}/>
                    </div>
                    <div className='coin-recent-transaction'>
                        Bitcoin
                    </div>
                    <div className='date-recent-transaction'>
                        10:45:16AM
                    </div>
                    <div className='recent-amount'>
                        +1545,00
                    </div>
                    <div className='status'>
                        Completed
                    </div>
                </div> */}
                
               

               
               
            </div>
            <div className='walletbalance-list'>
                    <div className='GifttCard'>
                        <img src={GIFTCARD} />
                        <button className='btn btn-secondary mt-2'>
                            Trade Your Gift Card with us.
                        </button>
                    </div>

                   
            </div>
        </div>
    )
}

export default Index;