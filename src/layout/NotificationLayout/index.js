import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineFall} from 'react-icons/ai'
import {Button} from 'react-bootstrap'

const Index = ()=>{
    return (
        
            <div className="transaction">
                <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'red'}}>Withdrawal Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineRise color='red' size={30}/></span> </div>
                        <small>You have Initiated Transfer of 0.0005 BTC to yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div>


                <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'green'}}>Deposit Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineFall color='green' size={30} /></span> </div>
                        <small>You have received a  Transfer of 0.0005 BTC from yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div>
                
        </div>
        
    )
}

export default Index;