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
                <div className='TeamMember'>
                    <div>ROLAND SAMUEL</div>
                    <div>CEO</div>
                    <img src={CEO} />

                </div>

                <div>
                    <div className='TeamMember'>
                        <div>ANITA JOY</div>
                        <div>CCO</div>
                        <img src={AMD} />

                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>JOE MAIN</div>
                        <div>MARKETER</div>
                        <img src={CCO} />

                    </div>
                </div>
                <div>
                    <div className='TeamMember'>
                        <div>DENNIS JOY</div>
                        <div>CTO</div>
                        <img src={CTO} />

                    </div>
                </div>

           </div>
        </div>
    )
}

export default Index;