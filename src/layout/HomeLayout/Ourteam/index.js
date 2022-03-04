import '../../../assets/css/Ourteam/ourteam.css'
import CEO from '../../../assets/images/team/member6.png'
import AMD from '../../../assets/images/team/member5.png'
import CTO from '../../../assets/images/team/member4.png'
import CCO from '../../../assets/images/team/member3.png'
const Index = ()=>{
    return(
        <div className="ourteam">
           <h1 className='ourTeamTitle'>Our Team</h1>
           <div className='teamText'>
                <p>We are proud of our great team. He is one of the most motivated and is always ready and willing to help out where needed.</p>
           </div>
           <div className='underline'><hr/></div>
           <div className='pictureDiv'>
               <div>
                <div className='TeamMember'>
                        <div className='name'>ROLAND SAMUEL</div>
                        <div className='role'>CEO</div>
                        <img src={CEO} className="show" />
                        <img src={AMD} className="onHover" />

                    </div>
               </div>
               

                <div>
                    <div className='TeamMember'>
                        <div>ANITA JOY</div>
                        <div>CCO</div>
                        <img src={AMD} className="show" />
                        <img src={CTO} className="onHover" />

                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>JOE MAIN</div>
                        <div>MARKETER</div>
                        <img src={CCO} className="show" />
                        <img src={CEO} className="onHover" />
                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>DENNIS JOY</div>
                        <div>CTO</div>
                        <img src={CTO} className="show" />
                        <img src={CCO} className="onHover" />

                    </div>
                </div>

           </div>
        </div>
    )
}

export default Index;