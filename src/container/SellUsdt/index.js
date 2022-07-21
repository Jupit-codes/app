import SellUSDTLayout from '../../layout/SellUSDTLayout'
import '../../assets/css/settings/profile.css'
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Footer from '.././../layout/BodyLayout/Footer'
const Index =({openClose,trigger,settrigger})=>{
    
    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            
            <SellUSDTLayout manageTrigger={settrigger} realTrigger={trigger}/>

        </div>
    )
}

export default Index;