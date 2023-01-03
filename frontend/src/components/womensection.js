import CollapsibleExample from "./navbar";
import bgwomen from '../women/bgwomen.jpg';
import '../styles/womensection.css'
// import wdisplay1 from '../women/wdisplay1.jpg'
// import wdisplay3 from '../women/wdisplay3.jpg'
// import wdisplay4 from '../women/wdisplay4.jpg'
import sale from '../women/sale.jpg'
import cl1 from '../women/cl1.jpg'
import cl2 from '../women/cl2.jpg'
import cl3 from '../women/cl3.jpg'
import cl4 from '../women/cl4.jpg'
import cl5 from '../women/cl5.jpg'
import cl6 from '../women/cl6.jpg'
import cl7 from '../women/cl7.jpg'
import cl8 from '../women/cl8.jpg'
import { useState } from "react";
import Footer from "./footer";
const Women= () => {
    const [products]=useState([
        {id:0,pic:cl1,Price:0},
        {id:0,pic:cl2,Price:0},
        {id:0,pic:cl3,Price:0},
        {id:0,pic:cl4,Price:0},
        {id:0,pic:cl5,Price:0},
        {id:0,pic:cl6,Price:0},
        {id:0,pic:cl7,Price:0},
        {id:0,pic:cl8,Price:0},
        
        
        
       ]);
     return(
        <div style={{fontFamily:"Quesha"}}>
            
            <div className="ws1" style={{backgroundImage:`url(${bgwomen})`}} >
            <CollapsibleExample/>
            {/* <img src={bgwomen} alt='nothing'/>  */}
            <h1> Infinity Realm</h1>
            <p> Best Quality Women Proudcts All That You need</p>
            </div>

        <div className="newsflash">
            <h1>Wome Being The Best Deserve The Best</h1>
            <p>We here at Infinity Realm make sure that our queens get the best products</p>
        </div>


        {/* Women Contents will be visible here */}

        {/* <div className="row g-2 container-fluid" style={{padding:0 }}>
            <div className="col-5" style={{padding:0}}>
            <img style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"20px"}} src={wdisplay1} alt='nothig here'/>
            </div>
            <div className="col-7" style={{padding:0}}>
            <div className="row" style={{height:"70vh"}}>
            <img style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"20px"}} src={wdisplay3} alt='nothig here'/>
            
            </div>
            <div className="row" >
            <img style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"20px"}} src={wdisplay4} alt='nothig here'/>
           

            </div>

            </div>
            
        </div> */}


        <div className="salenotice" style={{backgroundImage:`url(${sale})`}}>
            <div>
            <h1>50% SALE ON ALL NEW WINTER COLLECTION</h1>

            <button>SHOP NOW</button>
            </div>
        </div>

        <div className="WNewArrival wglass" >
    <div className="row col-12" >
    {
      products.map((products,key) =>(
        
          <div className="wdisplay" style={{width:"20vw"}}>        
          <img src={products.pic} alt="nothing"/>
          </div>
          
        
      ))
    }
    </div>
          

            

        </div>
        <Footer/>
        </div>
     );
};
export default Women;