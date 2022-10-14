import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Index = ()=>{
    const [refresh,setrefresh] = useState();
    const [userNaira ,setuserNaira]= useState();

    
   const getbalance = (_id)=>{
    setrefresh('refreshing balance')
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/users/refresh`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
        
        // setuserBtc(res.data.btc_wallet[0].balance.$numberDecimal);
        setuserNaira(res.data.user.naira_wallet[0].balance.$numberDecimal);
        
        reactLocalStorage.remove('user')
        reactLocalStorage.setObject('user',res.data.user)  
        setrefresh('')
    
    })
    .catch((err)=>{

        console.log(err.response)
        
    })
    }
    useEffect(()=>{
    setuserNaira(reactLocalStorage.getObject('user').naira_wallet[0].balance.$numberDecimal)
    let _id = reactLocalStorage.getObject('user')._id;
    
    getbalance(_id)
    },[])
    return(
        <div>
             <div className='VerveCover'>
                            {/* <div className='verve cardBTC'>
                                
                            </div> */}
                            <div className='master'>
                                <div class="master-child">
                                    <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div className='cardnumber'>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            Naira Balance

                                        </div>
                                        <div className='card_section_balance'>
                                        &#8358;{userNaira && userNaira > 1 ? userNaira.toLocaleString() : userNaira}
                                        <div>{refresh}</div>
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            00/00
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            {reactLocalStorage.getObject('user').username.toUpperCase()}
                                        </div>
                                        <div className="cardimg">
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='visa cardUSDT'>
                                
                            </div> */}
                        </div>

                        <div class="btn_open_more">
                            <div className='btn_open_moreBTN cardNairaReplace'>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;