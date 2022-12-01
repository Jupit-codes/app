import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Index = ({comp})=>{

    const [userUSDT,setuserUSDT] = useState()
    const [refresh,setrefreshing] = useState()

    const getbalance = async(_id)=>{
        setrefreshing('refreshing balance..')
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/users/refresh`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({_id:_id})
        })
        .then((res)=>{
            setrefreshing('')
            setuserUSDT(res.data.user.usdt_wallet[0].balance.$numberDecimal);
            reactLocalStorage.remove('user')
            reactLocalStorage.setObject('user',res.data.user)
            
          
        })
        .catch((err)=>{
            setrefreshing('')
            // console.log(err.response)
            
        })
    }
     useEffect(()=>{
        comp('Usdt')
         setuserUSDT(reactLocalStorage.getObject('user').usdt_wallet[0].balance.$numberDecimal)
         let _id = reactLocalStorage.getObject('user')._id;
         getbalance(_id)
     },[])

    return (
        <div className='designcover slideCardLeft'>
                            <div className='cardNairaCover'>
                                <div className='overlay'>

                                </div>
                                <div className='cardNairaUSDT'>
                                    <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div className='cardnumber'>
                                            **** **** **** 0706
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            USDT Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            {userUSDT && userUSDT.toLocaleString('en-US',{maximumFractionDigits:2 })}&nbsp;USDT
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
                                        <div className='cardnumber'>
                                            <img src={cardType} />
                                        </div>
                                    </div>


                                </div>
                            
                            </div>
                            <div className='cardDesign'>
                                <div className='cardBTC'>
                                        
                                </div>
                                <div className='cardNAIRA'>
                                        
                                </div>
                            </div>
                        </div>
    )
}

export default Index