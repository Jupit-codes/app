import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
const Index = ()=>{
    return(
        <div>
             <div className='VerveCover'>
                            <div className='verve cardBtcReplace'>
                               
                            </div>
                            <div className='master'>
                                <div class="master-child cardUsdtReplace">
                                <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            USDT Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            $12,000,000
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            00/00
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
                            <div className='visa cardNairaReplace coat'>
                                
                            </div>
                        </div>

                        <div class="btn_open_more">
                            <div className='btn_open_moreBTN cardUsdtReplace'>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;