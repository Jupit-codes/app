import { useEffect, useState } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Select from 'react-select'
import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
import Flags from 'country-flag-icons/react/3x2'
import Step1 from './step1.js'
import Step2 from './step2.js'
import Step3 from './step3.js'
import { findRenderedComponentWithType } from "react-dom/test-utils";
const Index = ()=>{

    const [page,setpage] = useState('Step1')
    const [checkedOne,setcheckedOne] = useState(false);
    const [checkedTwo,setcheckedTwo] = useState(false)
    const [checkedThree,setcheckedThree] = useState(false)
    const [rate,setrate] = useState()
    const [allgiftcard, setallgiftcard] = useState([]);
    const [selectbrand,setselectbrand] = useState(false)
    
    var options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ];

      const GiftCard = async ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "GET",
            url: `${Base_url}/verify/giftCardApi`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            }
            
          })
        .then(res=>{

           
            setallgiftcard(res.data.brands)
            
           
           
        })
        .catch(err=>{
            console.log(err.response)
            
            
            
        })
      }

      useEffect(()=>{
          GiftCard();
      },[])

    const renderComponent = ()=>{
        switch(page){
            case 'Step1':
                
                return <Step1 stepPage={setpage} checked={setcheckedOne} rateSet={setrate}/>
                break;
            case 'Step2':
                
                return <Step2 stepPage={setpage} checked={setcheckedTwo} acceptRate={rate} />
                break;
            case 'Step3':
                
                return <Step3 stepPage={setpage} checked={setcheckedThree}/>
                break;
        }
    }

    const handleSelect = (e)=>{
      
      if(e.target.textContent === "Select"){
        var x = e.target.parentElement
      
        var y = x.parentElement;
        
        for(let i=0;i<y.children.length;i++){
            if(y.children[i].classList.contains('activeClicked')){
                y.children[i].classList.remove('activeClicked');
            }
        }
        x.classList.add('activeClicked');
       
      }
        
        

        

    }


    const _renderComponent = ()=>{
        
            return allgiftcard && allgiftcard.map((d)=>{
                return <div className="displayCard" onClick={(e)=>handleSelect(e)}>
                            <img src={d.image_url}/>
                            <div>{d.name}</div>
                            <div className="selectbutton">Select</div>
                        </div>
            })
        
    }

    const _displayNullCard = ()=>{
        return (
            <div>
                    <div className="brandselectederror">
                        No Brand Selected
                    </div>
                    <div className="brandselectedSpan">Kindly select one of the brand</div>
            </div>
            

        )
    }

    const _displayCard =()=>{
        return(
            <div>
                Card Selected
            </div>
        )
    }
    return(
        <div className="sellbody">
            <div className="giftCardDiv">
                    <div className="form-group searchBrand">
                        <input type='text' className="form-control" placeholder="Search for Brand"/>

                    </div>
                    {_renderComponent()}

            
                    {/* <div className="progressLine">
                        <div className={checkedOne ? "progressCircle dot" :"progressCircle"}></div>
                        <div className="progressStep">Step One</div>
                    </div>
                    <div className="progressLine">
                        <div className={checkedTwo ? "progressCircle dot" :"progressCircle"}></div>
                        <div className="progressStep">Step Two</div>
                    </div>
                    <div className="progressLine">
                        <div className={checkedThree ? "progressCircle dot" :"progressCircle"}></div>
                        <div className="progressStep">Step Three</div>
                    </div> */}
                    
            </div>
            <div className="FormDiv">
                
                {/* {renderComponent()} */}
               
                {selectbrand ?_displayCard() : _displayNullCard()}

                

            </div>


    </div>
       
    )
}

export default Index;