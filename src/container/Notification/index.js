import '../../assets/css/Notification/notification.css'
import Footer from '.././../layout/BodyLayout/Footer'
import NotificationLayout from '../../layout/NotificationLayout'
const Index = ({openClose})=>{
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
           <NotificationLayout/>
           <Footer/>
        </div>
    )
}
export default Index;