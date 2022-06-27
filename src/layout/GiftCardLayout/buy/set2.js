import {BiArrowBack} from 'react-icons/bi'

const Index = ({current,data,pickedC,message,giftcardrate})=>{
    
    console.log('data',data)
    const handleCurrency = (e)=>{
        
        if(e.target.classList.contains('selectbutton')){
            let x =  e.target.parentElement;
            let y = x.parentElement;
            for(let i=0;i<y.children.length;i++){
                if(y.children[i].classList.contains('activeCurrency')){
                    y.children[i].classList.remove('activeCurrency');
                }
            }
            x.classList.add('activeCurrency');
            // console.log(x.children[0].children[1].textContent)
            data[0].rate.map(d=>{
                if(d.country === x.children[0].children[1].textContent){
                    giftcardrate(d.buy)
                }
                
            })
            
            pickedC(x.children[0].children[2].textContent)
            
            message('norate')
        }
    }


    const _renderCountry =()=>{
        return data && data.map((d)=>{
        
            return d.countries.map((x)=>{
                
                return <div className='countryFlag' onClick={(e)=>handleCurrency(e)}>
                            
                            <div className='flagIconText'>
                                <img src={x.image_url}/>
                                <span className='currencySet'>{x.country_name}</span>
                                <span className='currencySet'>{x.currency}</span>
                            </div>
                            <div className='selectbutton'>
                                Select
                            </div>
                            

                        </div>
            })
        })
    }
    const _renderComponent = ()=>{
        console.log(data)
        return data && data.map((d)=>{
            return <div className="country_div">
                        
                       
                            <div className="brandlogo">
                                <img src={d.image_url}/>
                            </div>
                            <div className="brandname">
                                {d.brandname}
                            </div>
                        
                       
                    </div>
        })
    }

    return(
        <div className="country">
            <div className="arrow">
                <BiArrowBack  size={20} color="#000" onClick={()=>{current('SET1') ;message('nobrand')}}/>
            </div>
           {_renderComponent()}
           {_renderCountry()}
        </div>
    )
}

export default Index;