import {MdOutlineSecurity} from 'react-icons/md'

const Index = ({Next})=>{
    return(
        <div>
            <div className='welcome2fa'>
                    <div className=''>
                            <MdOutlineSecurity size={100} color="#3498db"/>
                    </div>
                        Welcome to Jupit 2FA Authentication SetUp.
                        Click on the Button Below to get Started, while we walk you through a seamless pipeline to activating the process.
                    </div>

                    <div className='TabInput SubmitModal' onClick={Next('Section2')} >
                      Activate 2FA
                
            </div>
        </div>
    )
}
export default Index;