import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
const Index = ({comp})=>{
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
                                        &#8358;{reactLocalStorage.getObject('user').naira_wallet[0].balance.$numberDecimal}&nbsp;
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