
import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Transaction from '../../layout/TransactionLayout'
import Footer from '.././../layout/BodyLayout/Footer'
const Index = ({openClose})=>{
    
    return(
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            {/* <WelcomeNote/> */}
            <Transaction/>
            {/* <Footer/> */}
         {/* <ImportantNotice/> */}
         
     </div>
    )
}

export default Index;