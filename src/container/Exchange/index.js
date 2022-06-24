
import '../../assets/css/Body/body.css';
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import ExchangeDefault from '../../layout/ExchangeLayout/newDefault'
import Footer from '.././../layout/BodyLayout/Footer'
const Index = ({openClose})=>{
    return(
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            
            <ExchangeDefault/>
            
         {/* <ImportantNotice/> */}
     </div>
    )
}

export default Index;