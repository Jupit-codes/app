import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
const Index = ()=>{
    const [loader, setloader] = useState(false)
    const [cardname,setcardname] = useState([])
    const [countryType,setcountryType] = useState([]);
    const [data,setdata] = useState([]);
    const [cardType,setcardType] = useState([])
    const [rate,setrate] = useState([])
    // console.log(Countries)
    // console.log("Countries",countries)
    const getCard =async()=>{

        // hasFlag('US') === true
        // hasFlag('ZZ') === false

        console.log(hasFlag('US'));
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

            console.log(res.data)
            setloader(false)
            
            setdata(res.data)
            setcardname([]);
            res.data.length > 0 && res.data.map((d)=>{
                setcardname(cardname=>[...cardname,d.cardname])
            })
            
           
           
        })
        .catch(err=>{
            console.log(err.response)
            setloader(false)
            
            
        })


    }


    useEffect(()=>{
        getCard();
    },[])

    const optionDetails=()=>{
        
       return  cardname.length > 0 && cardname.map((d,index)=>{
           
            return <option key={index} value={d} className="optionX">{d}</option>
        })
    }
    const optionCountry=()=>{
        console.log(countryType)
        // return  countryType.length > 0 && countryType.map((d,index)=>{
            
        //      return <option key={index} value={d} className="optionX">{d}</option>
        //  })
     }

    const handleCardType = (e)=>{
        alert(e.target.value);
        data.map((d)=>{
            if(d.cardname === e.target.value){
                setcountryType(d.currency);
                setcardType(d.cardType);
                setrate(d.rate)
            }
        })
    }
    return(
        <div className="sellbody">
            <div className="formProgress">
                   
            </div>
            <div className="FormDiv">
                <div className="form-group myformSell">
                        <select className="form-control" onChange={handleCardType}>
                            <option>
                                Select Gift Card Type
                            </option>
                            {optionDetails()}
                        </select>
                       
                </div>
                <div className="form-group myformSell">
                        <select className="form-control">
                            <option>
                                Select Country
                            </option>
                            {optionCountry()}
                        </select>
                       
                </div>
            </div>


        </div>
    )
}

export default Index;