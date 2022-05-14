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
    const [loader,setloader] = useState(false);
    const [brandlist,setbrandlist] = useState([]);
    const [SelectOption,setSelectOption] = useState()
    
    const options = [
        { value: '100USD', label: '100USD @ N215' },
        { value: '50USD', label: '50USD @ N200' },
        { value: '25USD', label: '25USD @ 180' },
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
        setselectbrand(true);
        setloader(true);
        loadBrandDetails(x.children[1].value)
        
       
      }
        

    }

    const loadBrandDetails = async (mybrand)=>{
       
        
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/giftCardApi/brandname`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
            data:JSON.stringify({mybrand:mybrand})
            
          })
        .then(res=>{

            setbrandlist(res.data.brand);
            console.log(res.data)
            setloader(false)
            
           
        })
        .catch(err=>{
            console.log(err.response)
            
            
            
        })
    }


    const _renderComponent = ()=>{
        
            return allgiftcard && allgiftcard.map((d)=>{
                return <div className="displayCard" onClick={(e)=>handleSelect(e)}>
                            
                            <img src={d.image_url}/>
                            <input type='hidden' value={d.brand_code}/>
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
    const handleChange = (e)=>{
        console.log(e.target)
        setSelectOption(e.target.value);
    }
    const _displayBrand = ()=>{
        console.log(brandlist)
                    return brandlist && 
                    <div className="brandFlex">
                        <div className="brandTitle">
                            <div className="imgBrand">
                                <div style={{width:'100%'}}> 
                                    <img src={brandlist.image_url} className="imgBrandDetails"/>
                                </div>
                                <div className="brandlistname">
                                    {brandlist.name}
                                </div>
                            </div>
                            

                            <div className="currency">
                                {brandlist.fund_currencyisocode}
                            </div>


                            
                        </div>
                        <div className="selectTool">
                        <Select
                                defaultValue={SelectOption}
                                onChange={setSelectOption}
                                options={options}
                                isMulti={true}
                                isSearchable={true}
                                placeholder='Type/click to select'
                        />
                        </div>
                    </div>                    
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
               
                {!selectbrand && _displayNullCard()}
                {loader && <div className='Chartloader'></div>}
                {selectbrand && !loader && _displayBrand()}

                

            </div>


    </div>
       
    )
}

export default Index;