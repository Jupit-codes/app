import '../../../assets/css/Body/section3.css'

const Index = ()=>{
    return (
        <div className="body_section3">
           <div className='marketTransaction'>
                <div>
                    Recent Transaction
                </div>
               
            </div>
            <div className='walletbalance'>
                    <div className='walletBalanceTitle'>
                        <div className='balanceWallet'>
                            Balances
                        </div>
                        <div className='balanceIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        </div>
                    </div>

                    <div className='walletAmount'>
                       GiftCards
                    </div>
            </div>
        </div>
    )
}

export default Index;