import React from 'react'
import '../../../assets/css/Learn/herolearn.css'
const Index =()=>{
    return(
        <div className="learn">
            <div className="learnTitle">Jupit Learning Center</div>
            <div>Stories from the easiest and most trusted place to buy, sell, and use crypto</div>

            <div className="search">
                <div className="inputSearch">
                     <input type="text" placeholder="Enter Search" className="form-control"/>
                </div>
                <div className="selectSearch">
                    <select className="form-control">
                        <option>Cryptocurrency</option>
                    </select>
                </div>
                <div className="create-button-readmore btnSearch">
                    Search
                </div>
               
            </div>
        </div>
    )
}

export default Index