import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
import Flags from 'country-flag-icons/react/3x2'
const Index = ({stepPage,checked})=>{
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
        checked(true)
        getCard();
    },[])

    const optionDetails=()=>{
        
       return  cardname.length > 0 && cardname.map((d,index)=>{
           
            return <option key={index} value={d} className="optionX">{d}</option>
        })
    }
    const optionCountry=()=>{
      
    

        return countryType.length > 0 &&  countryType.map((d)=>{

                // console.log(d);
                
                for (const key in d) {
    
                    // console.log(`${key}: ${d[key]}`); 
                    
                    return <option key={key} value={d[key]}>{key}-{d[key]} </option>

                }       
        })

     }

     const optionCardType = ()=>{
         
         return cardType.length > 0 &&  cardType.map((d)=>{

            
            for (const key in d) {

                // console.log(`${key}: ${d[key]}`); 
                
                return <option key={key} value={d[key]}>{key}-{d[key]} </option>

            }       
        })
     }



    const handleCardType = (e)=>{
        
        data.map((d)=>{
            if(d.cardname === e.target.value){
                setcountryType(d.currency[0]);
                setcardType(d.cardType[0]);
                setrate(d.rate[0])
            }
        })
    }

    const proceed = ()=>{
        stepPage('Step2');
    }
    return(
        
            
            <div className="">
                <div className="form-floating myformSell">
                        
                        <select className="form-control" id="floatingSelect" onChange={handleCardType}>
                            <option>
                                Select Gift Card Type
                            </option>
                            {optionDetails()}
                        </select>
                        <label for="floatingSelect">Gift Card Type</label>
                       
                </div>
                <div className="form-floating myformSell">
                        
                        <select className="form-control" id="floatingSelectCountry">
                            
                            {optionCountry()}
                        </select>
                        <label for="floatingSelectCountry">Currency</label>
                        
                </div>

                <div className="form-floating myformSell">
                        
                        <select className="form-control" id="floatingSelectCardType">
                            
                            {optionCardType()}
                        </select>
                        <label for="floatingSelectCardType">Card Type</label>
                        
                </div>
                <div className="form-group formbtn">
                    <input type="button" className="form-control proceedForm" value="Proceed" onClick={()=>proceed()}/>
                </div>

            </div>


        
    )
}

export default Index;