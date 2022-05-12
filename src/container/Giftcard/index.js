import GiftCardLayout from '../../layout/GiftCardLayout'
const Index = ({openClose})=>{
    return(
        <div className={openClose ? 'bodyOpen':'bodyClose'}>
            <GiftCardLayout/>
        </div>
    )
}

export default Index;