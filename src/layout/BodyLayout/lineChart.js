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
import { useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
  
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

    const getData = ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/threshold/chart/data`,
        headers:{
            "Content-Type":"application/json",
            "Authorization":reactLocalStorage.get('token')
        },
        data:JSON.stringify({
            wallet_type:'BTC',
            userid:reactLocalStorage.getObject('user')._id
  
        })
    })
    .then((res)=>{
        

        // console.log(res.data)
        
      
    })
    .catch((err)=>{
       
        console.log(err.response)
       
    })
    }



        useEffect(()=>{

        },[])




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
                        label: 'Buy',
                        data: [0.5, 0.005,0.01,0.1,0.2,0.3,0.5,0.8,0.4,0.3,0.5,0.5],
                        backgroundColor: '#00DEA3',
                        borderColor: '#00DEA3',
                    },
                    {
                        id: 2,
                        label: 'Sell',
                        data: [1, 0.003,0.08,0.5,0.4,0.3,0.5,0.4,0.2,0.3,0.1,0.005],
                        backgroundColor: '#5A55D2',
                        borderColor: '#0071bd',
                        
                    },
                    ],
                   
                }}
                
            />
        </div>
    )
}

export default Index;