
import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import WalletDefault from '../../layout/WalletLayout'
import Footer from '.././../layout/BodyLayout/Footer'
const Index = ({openClose})=>{
    return(
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
            <WelcomeNote/>
            <WalletDefault/>
            <Footer/>
         {/* <ImportantNotice/> */}
     </div>
    )
}

export default Index;