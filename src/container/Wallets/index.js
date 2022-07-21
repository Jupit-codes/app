
import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import WalletDefault from '../../layout/WalletLayout/newDefault'
import Footer from '.././../layout/BodyLayout/Footer'
const Index = ({openClose})=>{
    return(
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            
            <WalletDefault/>
            
         {/* <ImportantNotice/> */}
     </div>
    )
}

export default Index;