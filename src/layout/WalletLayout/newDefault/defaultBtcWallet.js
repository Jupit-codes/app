import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
const Index = ()=>{
    return(
        <div>
             <div className='VerveCover'>
                            <div className='verve cardNairaReplace'>
                                
                            </div>
                            <div className='master'>
                                <div class="master-child master-child-btc">
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
                                            Btc Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            $12,000,000
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
                            <div className='visa cardNaira'>
                                Visa
                            </div>
                        </div>

                        <div class="btn_open_more ">
                            <div className='btn_open_moreBTN cardBtcReplace'>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;