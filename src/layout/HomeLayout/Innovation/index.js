import '../../../assets/css/Innovative/innovative.css'
import img from '../../../assets/images/team-on-work.png'
const Index = ()=>{
    return(
        <div className="innovative">
            <div className="innovative1 slide-right">
                <img src={img} className=""/>
            </div>
            <div className='innovative2 slide-left' >
                <div className='innovative-2a'>Innovative Payment Network</div>
                <div className='innovative-2b'>NEW KIND OF MONEY</div>
                 <div className="innovative-2c">
                     Simple & secure access to buy, sell and use Bitcoin
                 </div>
                 <div className='innovative-2d'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl porttitor, eleifend tortor sed, auctor libero. Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam vitae nunc ac eros laoreet egestas.

                 </div>

                 <div className='readmoreInnovative '>
                     Read More
                 </div>

            </div>
        </div>
    )
}

export default Index;