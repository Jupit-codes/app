import React from 'react'
import '../../../assets/css/Learn/learncontent.css'
import blog1 from '../../../assets/images/learn/1.webp'
import blog2 from '../../../assets/images/learn/2.webp'
import blog3 from '../../../assets/images/learn/3.webp'
import blog4 from '../../../assets/images/learn/4.webp'
const Index =()=>{
    return(
        <div className="learnContent">
            <div className="bloginfo">.Cryptocurrency .webinar 2mins</div>

            <div className="newestpost">
                <div className="blogImage">
                       <div className="overlayCover">

                       </div>
                </div>
                <div className="blogtext">
                        <div className="newest_title">Crypto: The Secret Ingrident of The Future</div>
                        <div className="newest_more">
                            Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...
                        </div>
                </div>
            </div>

            <div className="latestnews">
                Latest News...
            </div>
            <div className="latest-flex">
                        <div className="otherblog shadow-lg">
                            <img src={blog1} className="cardpost"  />
                            <div className="newest_title">Trade: Safety Tips  to be Considered during Trading.</div>
                            <div className="cardBody">
                                <div className="cardCover">
                                    <div className="bloginfo">.Trade . Post . 1week</div>
                                    <div className="newest_more">Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="otherblog shadow-lg">
                             <img src={blog2} className="cardpost"  />
                             <div className="newest_title">Trade: Safety Tips  to be Considered during Trading.</div>
                            <div className="cardBody">
                                <div className="cardCover">
                                    <div className="bloginfo">.Trade . Post . 1week</div>
                                    <div className="newest_more">Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="otherblog shadow-lg">
                            <img src={blog3} className="cardpost"  />
                            <div className="newest_title">Trade: Safety Tips  to be Considered during Trading.</div>
                            <div className="cardBody">
                                <div className="cardCover">
                                    <div className="bloginfo">.Trade . Post . 1week</div>
                                    <div className="newest_more">Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="otherblog shadow-lg">
                            <img src={blog4} className="cardpost"  />
                            <div className="newest_title">Trade: Safety Tips  to be Considered during Trading.</div>
                            <div className="cardBody">
                                <div className="cardCover">
                                    <div className="bloginfo">.Trade . Post . 1week</div>
                                    <div className="newest_more">Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...</div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="otherblog shadow-lg">
                            <img src={blog4} className="cardpost"  />
                            <div className="newest_title">Trade: Safety Tips  to be Considered during Trading.</div>
                            <div className="cardBody">
                                <div className="cardCover">
                                    <div className="bloginfo">.Trade . Post . 1week</div>
                                    <div className="newest_more">Everyone has that favorite meal that they can cook with their eyes closed. While some recipes are easily available for anyone to learn from, some come with...</div>
                                </div>
                                
                            </div>
                            
                        </div>
            </div>

        </div>
    )
}

export default Index