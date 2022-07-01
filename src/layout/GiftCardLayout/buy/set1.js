import axios from "axios";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import HorizontalScroll from 'react-scroll-horizontal'

const Index = ({current,message,setdata,pickedB,setimageurlset1})=>{
    const [brandloader,setbrandloader] = useState(true);
    const [loader,setloader] = useState(true);
    const [prevData,setprevData] = useState()
    const [search,setsearch] = useState('')
    const [allgiftcard, setallgiftcard] = useState([]);
    const [selectbrand,setselectbrand] = useState(false)
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

            console.log(res.data)
            setbrandloader(false)
            setallgiftcard(res.data)
            setprevData(res.data);
           
        })
        .catch(err=>{
            console.log(err.response)
            
            
            
        })
      }

      useEffect(()=>{
          GiftCard();
      },[])

      const handleSelect = (e,url)=>{
      
        if(e.target.textContent === "Select"){
          var x = e.target.parentElement
          
          var y = x.parentElement;
        //   console.log(x.children[1].textContent);
        //   console.log(y)
          
          for(let i=0;i<y.children.length;i++){
              if(y.children[i].classList.contains('activeClicked')){
                  y.children[i].classList.remove('activeClicked');
              }
          }
          x.classList.add('activeClicked');

          let selectedData = allgiftcard.filter((d)=>{
              return d.brandname === x.children[1].textContent
          })
          console.log('SElectedData',selectedData)
          message('nocurrency');
          setdata(selectedData)
          setimageurlset1(url)
          pickedB(x.children[1].textContent);
          current('SET2');
          
       
          
         
        }
          
  
      }

      const handleSearch = (e)=>{
        
        if(e.target.value){
            const filteredData= allgiftcard.filter(d=>{
                return d.brandname.toLowerCase().includes(e.target.value.toLowerCase())
            })
    
            console.log(filteredData)
            setallgiftcard(filteredData);
        }
        else{
            setallgiftcard(prevData)
        }
        setsearch(e.target.value)
       



    } 

        const _renderComponent = ()=>{
        
            return allgiftcard && allgiftcard.map((d)=>{
                return <div className="displayCard"  onClick={(e)=>handleSelect(e,d.image_url)}>
                            
                            
                                <img src={d.image_url} className="brandimg"/>
                            
                            
                            <div>{d.brandname}</div>
                            <div className="selectbutton">Select</div>
                        </div>
            })
    
        }
   

    return(
        <div>
           
             <div className="form-group searchBrand">
                        <input type='text' className="form-control control-width" placeholder="Search for Brand" value={search} onChange={handleSearch}/>

            </div>
            {brandloader ? <div className='Chartloader'></div> : <div className="displayCardParent"> {_renderComponent()}</div>} 
                    
        </div>
    )
}
export default Index;