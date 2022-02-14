import SendLayout from '../../layout/Sendlayout'
import '../../assets/css/settings/profile.css'
import WelcomeNote from '../../layout/BodyLayout/WelcomeNote';
import Footer from '.././../layout/BodyLayout/Footer'
const Index =({openClose})=>{
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
            <WelcomeNote/>
            <SendLayout/>
            <Footer/>

        </div>
    )
}

export default Index;