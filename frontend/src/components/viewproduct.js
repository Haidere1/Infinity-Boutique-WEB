import CollapsibleExample from "./navbar";
import cartbg from '../backgrounds/cartbg10.jpg'
import '../styles/viewproduct.css'
import cl1 from '../men/cl1.jpg'
const Viewproduct = () => {
    return ( 
        <div style={{backgroundImage:`url(${cartbg})`}} className="mainpr">
            <CollapsibleExample/>
        <div  className="vpmain">
               
            <div className="innerview">
            <div className="innerimg">
            <img src={cl1} alt=""></img>
            </div>
            <div className="prddescp">
                <h1>
                    Product Name: abcd
                </h1>
                <h2>
                    Description: we are the best
                </h2>
                
                <h2>Color: many colors</h2>

                <div className="size">
                <h2>Size:</h2>
                <h3>X</h3>
                <h3>X</h3>
                <h3>X</h3>
                </div>

                <button>Add To Cart</button>
            </div>
        </div> 
        </div>
        </div>
        
        
     );
}
 
export default Viewproduct;