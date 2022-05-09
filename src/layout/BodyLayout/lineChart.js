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
import { useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import {BiLoaderCircle} from 'react-icons/bi'
  
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
    const [loader,setloader] = useState(true)
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

    const fetchChart = async()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/getChart/data`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
            data:{btcaddress:reactLocalStorage.getObject('user').btc_wallet[0].address}
          })
        .then(res=>{
            console.log(res);
            setloader(false)
        
        })
        .catch(err=>{
            console.log(err)
            setloader(false)
            //seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })
    }

        useEffect(()=>{
                fetchChart();
        },[])




    return(
        <div className='chartx'>
            {
                loader ? <div className='Chartloader'> </div> : 
                <Line
                datasetIdKey='id'
               
                options={{maintainAspectRatio: true}}
                data={{
                    labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
                    datasets: [
                    {
                        id: 1,
                        label: 'Send',
                        data: [0.5, 0.005,0.01,0.1,0.2,0.3,0.5,0.8,0.4,0.3,0.5,0.5],
                        backgroundColor: '#00DEA3',
                        borderColor: '#00DEA3',
                    },
                    {
                        id: 2,
                        label: 'Receive',
                        data: [1, 0.003,0.08,0.5,0.4,0.3,0.5,0.4,0.2,0.3,0.1,0.005],
                        backgroundColor: '#5A55D2',
                        borderColor: '#0071bd',
                        
                    },
                    ],
                   
                }}
                
            /> 
            }
           
            
        </div>
    )
}

export default Index;