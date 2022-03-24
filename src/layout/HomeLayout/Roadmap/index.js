import '../../../assets/css/Roadmap/roadmap.css'
const Index = ()=>{
    return(
        <div className="roadmap" id="roadmap">
            <div className='titleOffer'>Roadmap</div>
            <div className='titleTextOffer'>
                Below we’ve provided a bit of information regarding our brand and operations. If you have any other questions, please get in touch.
            </div>

            <div className='roadmapDiv'>
                <section className='timeliner'>
                    <div className='timeline-line'>
                        <span className='timeline-innerline'>

                        </span>
                    </div>
                    <ul>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q3 2021</span>
                            <p>Project Viability Research</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q4 2021</span>
                            <p>Project Viability Research</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q1 2022</span>
                            <p>Project Viability Research</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q2 2022</span>
                            <p>Project Viability Research</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q3 2022</span>
                            <p>Project Viability Research</p>
                        </li>
                        <li>
                            <span className='timeline-point'></span>
                            <span className='date'>Q1 2023</span>
                            <p>Project Viability Research</p>
                        </li>
                    </ul>
                </section>
                <div className='buttonRoadMap'>
                        Roll With Us
                </div>
            </div>


        </div>
    )
}

export default Index;