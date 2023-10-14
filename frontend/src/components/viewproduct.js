import CollapsibleExample from "./navbar";
import cartbg from '../backgrounds/cartbg10.jpg'
import '../styles/viewproduct.css'

import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { prDisplay, productCart } from "../Service/api";
const Viewproduct = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);
 
   
    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        const result = await prDisplay(id);
        setProduct(result.data);
        console.log(product)
    }

    const prAdditionCart = async (e) => {
        e.preventDefault();
        await productCart(product);

        window.alert("Successfully Added Product")
       


    }
   
    
    return ( 
        <div style={{backgroundImage:`url(${cartbg})`}} className="mainpr">
            <CollapsibleExample/>
        <div  className="vpmain">
        
        <div className="innerview">
            <div className="innerimg">
            <img src={product.prImage} alt=""></img>
            
            </div>
            <div className="prddescp"> 
                <h2>
                    Product Name:
                </h2>

                <h3>
                {product.prName}
                </h3>



                <h2>
                    Description:
                </h2>

                <h3>
                {product.prDescription}
                </h3>
                
                
                <h2>Price:</h2>
                <h3> {product.prPrice}</h3>
                

                

                <Link to='/cart'><button onClick={prAdditionCart}>Add To Cart</button></Link>
            </div>
                
            
        </div> 
            
        </div>
            
        </div>
        
        
     );
}
 
export default Viewproduct;