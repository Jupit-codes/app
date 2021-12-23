import React from "react";
import '../../../assets/css/Home/section10.css'
import blogpost1 from '../../../assets/images/section10/blogpost1.png'
import blogpost2 from '../../../assets/images/section10/blogpost2.png'


const Index = ()=>{
    return(
        <section className="section10">
            <div className="ourblog">Our Blog</div>
            <div className="blogpost_flex">
                    <div className="blogpost shadow-lg">
                        <div className="blogimg">
                            <img src={blogpost1}/>
                            <div className="blogType">
                                <small >Cryptocurrency</small>
                                <small>Webinar</small>
                                <small>2mins</small>
                            </div>
                            <div className="blogTitle">
                                Crypto: The Secret Ingredient Of The Future
                            </div>
                            <div className="blogContent">
                            Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="blogpost shadow-lg">
                        <div className="blogimg">
                                <img src={blogpost2}/>
                                <div className="blogType">
                                <small >Cryptocurrency</small>
                                <small>Webinar</small>
                                <small>2mins</small>
                            </div>
                            <div className="blogTitle">
                                Crypto: The Secret Ingredient Of The Future
                            </div>
                            <div className="blogContent">
                            Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className="more_div">
                <div className="more">
                        Read Post
                </div>
            </div>
            
        </section>
    )
}

export default Index;