import CollapsibleExample from "./navbar";
import mentop from '../men/mentop2.jpg'
import menmid from '../men/menmid6.jpg'
import '../styles/mensection.css'
import { useState } from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import cl1 from '../men/cl1.jpg'
import cl2 from '../men/cl2.jpg'
import cl3 from '../men/cl3.jpg'
import cl4 from '../men/cl4.jpg'
import cl5 from '../men/cl5.jpg'
import cl6 from '../men/cl6.jpg'
import cl7 from '../men/cl7.jpg'



const Men = () => {
    const [menpr]=useState([
        {id:0,primg:cl1,price:23},
        {id:0,primg:cl2,price:12},
        {id:0,primg:cl3,price:44},
        {id:0,primg:cl4,price:55},
        {id:0,primg:cl5,price:55},
        {id:0,primg:cl6,price:55},
        {id:0,primg:cl7,price:55},
        {id:0,primg:cl7,price:55},
        
    ])
    return(
        <div style={{fontFamily:"Quesha" ,backgroundColor:"black"}}>
            <div className="ms1" style={{backgroundImage:`url(${mentop})`}}>
            <CollapsibleExample/>

            <h1>Infinite Attraction</h1>
            <p>
                Enjoy Infinite Attraction With Infinity Realm
            </p>
            </div>

            {/* Mide Section Starts From Here */}

            <div className="midsection" style={{backgroundImage:`url(${menmid})`}}>
            <div className="midcontent midglass">

            <h3>Latest Styles</h3>
            <button>Check Now</button>
            </div>
            
            </div>

            {/* Product Display Starts From Here */}
        <div className="row col-12">
        {
            menpr.map((pr,key)=>(
                
                <div className="mprdisp" style={{width:"20vw"}}>

                <Link to='/viewproduct'><img src={pr.primg} alt='nothing'/></Link>
                   
                </div>
                
                

            ))
        }
        </div>

<Footer/>
        </div>
    )

};
export default Men;