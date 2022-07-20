import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Index = ({comp})=>{

    
    const [userNaira,setuserNaira] = useState()
    const [refresh,setrefreshing] = useState()
    const getbalance = async(_id)=>{
        try{
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
                setuserNaira(res.data.user.naira_wallet[0].balance.$numberDecimal);
                reactLocalStorage.remove('user')
                reactLocalStorage.setObject('user',res.data.user)
                
    
                
              
            })
            .catch((err)=>{
                setrefreshing('')
                console.log(err.response)
                
            })
        }
        catch(error){
            if (axios.isCancel(error)) {
            } else {
                throw error
            }
        }
        
    }
     useEffect(()=>{
         const source = axios.CancelToken.source();
         setuserNaira(reactLocalStorage.getObject('user').naira_wallet[0].balance.$numberDecimal)
         let _id = reactLocalStorage.getObject('user')._id;
         getbalance(_id)
     },[])

    return (
        <div className='designcover slideCardLeft'>
                            <div className='cardNairaCover '>
                                <div className='overlay'>

                                </div>
                                <div className='cardNaira'>
                                    <div className='card_section_a'>
                                        <div >
                                            <img src={jupit}/>
                                        </div>
                                        <div className='cardnumber'>
                                            **** **** **** 1234
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            Main Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            &#8358;{userNaira && userNaira.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;
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
                                <div className='cardBTC'>
                                        
                                </div>
                                <div className='cardUSDT'>
                                        
                                </div>
                            </div>
                        </div>
    )
}

export default Index