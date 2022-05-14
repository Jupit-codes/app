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
    
    var options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ];

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
    return(
        <div className="sellbody">
            <div className="">
            <p>Temiloluwa</p>
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
            </div>


    </div>
       
    )
}

export default Index;