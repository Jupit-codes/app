import '../../../assets/css/Body/section2.css'
import { Chart, LineAdvance} from 'bizcharts';
import LineChart from '../lineChart.js'
import { useEffect } from 'react';
const Index = ()=>{
  
    
    
    return(
        <div className="body_section2">
            <div className='marketTransaction'>
               <LineChart/>
            </div>
            <div className='walletbalance'>
                    balance
            </div>
        </div>
    )
}

export default Index