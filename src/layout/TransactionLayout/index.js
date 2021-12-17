import '../../assets/css/Transaction/transaction.css'
import empty from '../../assets/images/empty.png'
const Index = ()=>{
    return (
        <div className="transaction">
                <div className="th-title">
                     All Transactions
                </div>
                <div className="empty">
                    <img src={empty}/>
                    <div>No Transaction</div>
                </div>
        </div>
    )
}

export default Index