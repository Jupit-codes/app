import '../../../assets/css/Ourteam/ourteam.css'
import CEO from '../../../assets/images/team/MD.png'
import AMD from '../../../assets/images/team/MD2.png'
import CTO from '../../../assets/images/team/DEV.png'
import CTOII from '../../../assets/images/team/DEV2.png'
import CCO from '../../../assets/images/team/member3.png'
const Index = ()=>{
    return(
        <div className="ourteam" id="ourteam">
           <div className='newTitleOffer'>Our Team</div>
           <div className='titleTextOffer'>
                We are proud of our great team. He is one of the most motivated and is always ready and willing to help out where needed.
           </div>
           <div className='underline'><hr/></div>
           <div className='pictureDiv'>
               <div>
                <div className='TeamMember'>
                        <div className='name'>FEMI A. SOMOYE </div>
                        <div className='role'>Team Lead</div>
                        <img src={CEO} className="show" />
                        <img src={AMD} className="onHover" />

                    </div>
               </div>
               

                <div>
                    <div className='TeamMember'>
                        <div>OLALEKAN AKINOLA</div>
                        <div>Brand Strategist</div>
                        <img src={AMD} className="show" />
                        <img src={CTO} className="onHover" />

                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>PEACE ORIOLA</div>
                        <div>SM Campaign Manager</div>
                        <img src={CCO} className="show" />
                        <img src={CEO} className="onHover" />
                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>TEMILOLUWA ODEWUMI</div>
                        <div>Developer</div>
                        <img src={CTO} className="show" />
                        <img src={CTOII} className="onHover" />

                    </div>
                </div>

           </div>
        </div>
    )
}

export default Index;