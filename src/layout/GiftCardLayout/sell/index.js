import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import  FlagIcon from '../FlagIcon.js'
import Countries from '../countries.js'
const Index = ()=>{
    const [loader, setloader] = useState(false)
    const [cardname,setcardname] = useState([])
    console.log(Countries)
    const getCard =async()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        
        await axios({
            method: "GET",
            url: `${Base_url}/verify/get/allgiftcards`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            }
            
          })
        .then(res=>{
            setloader(false)
            
            console.log(res.data)
           
        })
        .catch(err=>{
            console.log(err.response)
            setloader(false)
            
            
        })


    }


    useEffect(()=>{
        getCard();
    },[])
    return(
        <div className="sellbody">
            <div className="formProgress">
                    <h1>Progress</h1>
            </div>
            <div className="FormDiv">
                <div className="form-group myformSell">
                        <select className="form-control">
                            <option>
                                Select Gift Card Type
                            </option>
                        </select>
                </div>
            </div>


        </div>
    )
}

export default Index;