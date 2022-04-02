import { Line } from 'react-chartjs-2';
import '../../assets/css/Body/chartx.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const Index = ()=>{

    return(
        <div className='chartx'>
           
            <Line
                datasetIdKey='id'
               
                options={{maintainAspectRatio: true}}
                data={{
                    labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
                    datasets: [
                    {
                        id: 1,
                        label: 'TopUp',
                        data: [0.5, 0.005,0.01,0.1,0.2,0.3,0.5,0.8,0.4,0.3,0.5,0.5],
                        backgroundColor: '#fff',
                        borderColor: '#003300',
                    },
                    {
                        id: 2,
                        label: 'Withdrawal',
                        data: [1, 0.003,0.08,0.5,0.4,0.3,0.5,0.4,0.2,0.3,0.1,0.005],
                        backgroundColor: '#fff',
                        borderColor: '#ff0000',
                        
                    },
                    ],
                   
                }}
                
            />
        </div>
    )
}

export default Index;