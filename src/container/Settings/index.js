import '../../assets/css/settings/settings.css'
import Settings from '../../layout/settingLayout/mysetttings'
const Index =({openClose})=>{
    return (
        <div className={openClose ? 'bodyClass':'bodyClass-collapse'}>
            <Settings/>
        </div>
    )
}

export default Index;