import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
const Index = ()=>{
    const [loader, setloader] = useState(false)
    const [cardname,setcardname] = useState([])
    // console.log(Countries)
    console.log("Countries",countries)
    const getCard =async()=>{

        // hasFlag('US') === true
        // hasFlag('ZZ') === false
        
        console.log(hasFlag('us'));
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
                        <div>
                            <FlagIcon code="us" size="3x" />
                        </div>
                </div>
            </div>


        </div>
    )
}

export default Index;