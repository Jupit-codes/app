import '../../assets/css/Notification/notification.css'
import Footer from '.././../layout/BodyLayout/Footer'
import NotificationLayout from '../../layout/NotificationLayout'
const Index = ({openClose})=>{
    return (
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
           <NotificationLayout/>
           
        </div>
    )
}
export default Index;