import SendUSDTLayout from '../../layout/SendUSDTLayout'
import '../../assets/css/settings/profile.css'
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Footer from '.././../layout/BodyLayout/Footer'
const Index =({openClose})=>{
    return (
        <div  className={openClose ? 'bodyOpen':'bodyClose'}>
            
            <SendUSDTLayout/>
           

        </div>
    )
}

export default Index;