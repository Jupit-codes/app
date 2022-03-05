import srcImg from '../../../assets/images/section-bg/section-bg2.jpg'
import '../../../assets/css/howitworks/howitworks.css'
import {FaPlay} from 'react-icons/fa'
import VideoModal from '../../../utils/modal/video.js'
import { useState } from 'react'
const Index = ()=>{
	const [modal, setmodal] = useState(false)
	const play =()=>{
		setmodal(true)
	}
    return (
        <div class="sectionDiv" id="howitworks">
			{modal && <VideoModal closeModal={setmodal}/>}
				<div className='parallax'></div>
				<div className='punditX'>
					<div onClick={()=>play()} className="play">
						<FaPlay  size={50} />
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