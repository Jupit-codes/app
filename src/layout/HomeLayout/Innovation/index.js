import '../../../assets/css/Innovative/innovative.css'
import img from '../../../assets/images/team-on-work.png'
const Index = ({myscroll})=>{
    
    return(
        <div className='innovative' id="innovative">
            <div className={myscroll >= 1277 ? 'innovative1 slide-right':''}>
                {myscroll >= 1277 && <img src={img} className=""/>}
            </div>
            <div className={myscroll >= 1277 ? 'innovative2 slide-left' :''} >
                <div className='innovative-2a'>  {myscroll >= 1277 && 'Innovative Payment Network'}</div>
                <div className='innovative-2b'> {myscroll >= 1277 && 'NEW KIND OF MONEY'}</div>
                 <div className="innovative-2c">
                 {myscroll >= 1277 && 'Simple & secure access to buy, sell and use Bitcoin'}
                     
                 </div>
                 <div className='innovative-2d'>
                 {myscroll >= 1277 && ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl porttitor, eleifend tortor sed, auctor libero. Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam vitae nunc ac eros laoreet egestas.'}
                

                 </div>

                 {myscroll >= 1277 && <div className='readmoreInnovative '>
                    
                    Read More
                </div>}
                 

            </div>
        </div>
    )
}

export default Index;