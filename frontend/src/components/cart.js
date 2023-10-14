import CollapsibleExample from "./navbar";
import cartbg from '../backgrounds/cartbg10.jpg'
import '../styles/viewproduct.css'
import '../styles/admin.css'

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {  deleteProductCart, prDisplayCart } from "../Service/api";
const Cart = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);
 
   
    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        const result = await prDisplayCart();
        setProduct(result.data);
        console.log(product)
    }

    const handleDelete = async (id) => {
        await deleteProductCart(id)
        .then(()=>
        {
            getProduct();
        })



    }

    
   
    
    return ( 
        <div style={{backgroundImage:`url(${cartbg})`}} className="mainpr">
            <CollapsibleExample/>
       

            <table className='table' style={{ color: "green", border: "1px solid white", marginTop: "30px" }}>
                    <thead>
                        <tr style={{ color: "gold" }}>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Image</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((details) =>
                            (
                                <tr style={{ border: "1px solid white" }}>
                                
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prName}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prPrice}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prDescription}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}><img src={details.prImage} alt='nothing here' style={{width:"200px",height:"300px"}}></img></td>
                                    <td><button className='btn btn-danger' onClick={()=>handleDelete(details._id)} > Delete</button></td>
                                   
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            
            
      
        
       
        </div>
        
        
     );
}
 
export default Cart;