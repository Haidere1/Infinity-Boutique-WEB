import CollapsibleExample from "./navbar";
import mentop from '../men/mentop2.jpg'
import menmid from '../men/menmid6.jpg'
import '../styles/mensection.css'
import { useState } from "react";
import Footer from "./footer";


const Men = () => {
    const [menpr]=useState([
        {id:0,primg:menmid,price:23},
        {id:0,primg:menmid,price:12},
        {id:0,primg:menmid,price:44},
        {id:0,primg:menmid,price:55},
        
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
                <img src={pr.primg} alt='nothing'/>
                   
                </div>
                
                

            ))
        }
        </div>

<Footer/>
        </div>
    )

};
export default Men;