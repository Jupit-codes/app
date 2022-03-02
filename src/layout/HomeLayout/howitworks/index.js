import srcImg from '../../../assets/images/section-bg/section-bg2.jpg'
import '../../../assets/css/howitworks/howitworks.css'
import {FaPlay} from 'react-icons/fa'
const Index = ()=>{
    return (
        <div class="sectionDiv">
				<div className='parallax'></div>
				<div className='punditX'>
					<div>
						<FaPlay  size={50}/>
					</div>
					<div className='howitworksTitle'>
						How Its Works?
					</div>
					<div className='howitworksText'>
					We like to think of ourselves as superheroes here at Jupit.
					We aren’t in the business of doing things just because they are routine.We are in the business of creating solutions that are simply mind-blowing.
					</div>
					
				</div>
		</div>
    )
}

export default Index;