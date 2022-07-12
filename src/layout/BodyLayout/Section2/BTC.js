import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Index = ({comp})=>{

    const [userBtc,setuserBtc] = useState()
    const [refresh,setrefreshing] = useState()

    const getbalance = async(_id)=>{
        setrefreshing('refreshing balance..')
        await axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/users/refresh`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({_id:_id})
        })
        .then((res)=>{
            setrefreshing('') 
            setuserBtc(res.data.user.btc_wallet[0].balance.$numberDecimal);
            reactLocalStorage.remove('user')
            reactLocalStorage.setObject('user',res.data.user)
            
          
        })
        .catch((err)=>{
            setrefreshing('')
            console.log(err.response)
            
        })
    }
     useEffect(()=>{
       
         setuserBtc(reactLocalStorage.getObject('user').btc_wallet[0].balance.$numberDecimal)
         let _id = reactLocalStorage.getObject('user')._id;
         getbalance(_id)
     },[])

    return (
        <div className='designcover slideCardLeft'>
                            <div className='cardNairaCover'>
                                <div className='overlay'>

                                </div>
                                <div className='cardNairaBTC'>
                                    <div className='card_section_a'>
                                        <div >
                                            <img src={jupit}/>
                                        </div>
                                        <div className='cardnumber'>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            BTC Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            {userBtc && userBtc.toString().replace(/(?<!\.\d+)\B(?=(\d{3})+\b)/g, ",")}&nbsp;BTC
                                            <div>{refresh}</div>

                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            03/09
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            {reactLocalStorage.getObject('user').username.toUpperCase()}
                                        </div>
                                        <div className='cardtype'>
                                            <img src={cardType} />
                                        </div>
                                    </div>


                                </div>
                            
                            </div>
                            <div className='cardDesign'>
                                <div className='cardNAIRA'>
                                        
                                </div>
                                <div className='cardUSDT'>
                                        
                                </div>
                            </div>
                        </div>
    )
}

export default Index