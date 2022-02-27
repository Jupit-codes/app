import {MdOutlineSecurity} from 'react-icons/md'
import '../../../../assets/css/Modal/modal.css'
const Index = ({Next})=>{
    return(
        <div>
            <div className='welcome2fa-section slide-right'>
                    
                <p>
                2FA is essential to web security because it immediately neutralizes the risks associated with compromised passwords. If a password is hacked, guessed, or even phished, that’s no longer enough to give an intruder access: without approval at the second factor, a password alone is useless.
                </p>
                
                <p>
                2FA also does something that’s key to maintaining a strong security posture: it actively involves users in the process of remaining secure, and creates an environment where users are knowledgeable participants in their own digital safety. When a 2FA notification comes to a user, they have to answer the question, “Did I initiate that, or is someone attempting to access my account?” This underlines the importance of security with each transaction. While most other web security methods are passive, and don’t involve end users as collaborators, 2FA creates a partnership between users and administrators.
                </p>

                <p>
                    Follow the Steps Below to Kick Start:
                    <p>
                        - Download and Install an Authenticator (Google Authenticator Preferablly) on your Mobile Device from App Store or Google Play
                    </p>
                    
                </p>
                

                <div className='TabInput SubmitModal' onClick={()=>Next('Section3')} >
                      Click Here To Move to the Next Phase   
                </div>
            </div>

            
        </div>
    )
}
export default Index;