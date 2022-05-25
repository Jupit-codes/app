import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Index = ({comp})=>{

    
    const [userNaira,setuserNaira] = useState()

    const getbalance = async(_id)=>{
        
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
            
            setuserNaira(res.data.naira_wallet[0].balance.$numberDecimal);
            
          
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

    return (
        <div className='designcover slideCardLeft'>
                            <div className='cardNairaCover '>
                                <div className='overlay'>

                                </div>
                                <div className='cardNaira'>
                                    <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div>
                                            **** **** **** 1234
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            Main Balance

                                        </div>
                                        <div className='card_section_balance'>
                                        &#8358;{userNaira}&nbsp;
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            03/09
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            ODEWUMI TEMILOLUWA
                                        </div>
                                        <div>
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