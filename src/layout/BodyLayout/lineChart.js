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
const Index = ({getClicked})=>{
    const [loader,setloader] = useState(true);
    const [mylabel,setlabel] = useState([]);

    const [data,setdata]= useState([]);
    const [receiveData, setreceiveData] = useState([])

    const [testData,settestData] = useState([]);
    
    // console.log('Host',getClicked);

    const fetchChart = async()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;

        let address = "";

        if(getClicked === "BTC"){
            address = reactLocalStorage.getObject('user').btc_wallet[0].address
        }
        else if(getClicked === "USDT"){
            address = reactLocalStorage.getObject('user').usdt_wallet[0].address
        }

      
        setloader(true)
        
        await axios({
            method: "POST",
            url: `${Base_url}/verify/getChart/data`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
            data:{btcaddress:address}
          })
        .then(res=>{
            console.log(res.data);
            let sumRecieve = 0;
            let sumSend = 0

            setlabel([]);
            setreceiveData([]);
            res.data.forEach((d)=>{
                console.log('year',d._id)



                d.monthlyusage.forEach((x)=>{
                    
                   
                   setlabel(mylabel =>[...mylabel,SwitchMonth(x.month)])
                    x.dailyusage.forEach((y)=>{
                        console.log('Data',y.totalTransaction)
                        if(y.Send === address){
                            sumSend += y.totalTransaction;
                        }
                        if(y.Receive === address){
                            sumRecieve += y.totalTransaction
                        }
                        
                        
                    })

                   
                   
                    setdata(data=>[...data,sumSend])
                    setreceiveData(receiveData=>[...receiveData,sumRecieve])

                })
            })
            setloader(false)
            console.log('Label',mylabel);
            console.log('Data',data)
           
        })
        .catch(err=>{
            console.log(err.response)
            setloader(false)
            //seterror(err.response ? err.response.data : 'Internal Server Error...Pls Try Again')
            
        })
    }

    const SwitchMonth = (month)=>{
        switch(month){
            case 1:
                return 'Jan';
                break;
           
            case 2:
                return 'Feb';
                break;
            case 3:
                return 'Mar';
                 break;
            case 4:
                return 'Apr';
                break;
            case 5:
                return 'May';
                break;
            case 6:
                return 'Jun';
                break;
            case 7:
                return 'Jul';
                break;
            case 8:
                return 'Aug';
                break;
            case 9:
                return 'Sept';
                break;
            case 10:
                return 'Oct';
                break;
            case 11:
                return 'Nov';
                break;
            case 12:
                return 'Dec';
                break;
            
        }
    }

        useEffect(()=>{
                fetchChart();
        },[getClicked])

        




    return(
        
        <div className='chartx'>
            {
                loader ? <div className='Chartloader'> </div> : 
                <Line
                        datasetIdKey='id'
                        options={{maintainAspectRatio: true}}
                        data={{
                        // labels: ['Apr','May'],
                                labels: mylabel,
                                datasets: [
                                    {
                                        id: 1,
                                        label: 'Send',
                                       
                                        data: data,
                                        backgroundColor: '#00DEA3',
                                        borderColor: '#00DEA3',
                                    },
                                    {
                                        id: 2,
                                        label: 'Receive',
                                        data: receiveData,
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