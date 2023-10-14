import CollapsibleExample from "./navbar";
import Carousel from 'react-bootstrap/Carousel';
import cimage1 from '../images/cimage1.jpg'
import cimage2 from '../images/cimage2.jpg'
import cimage3 from '../images/cimage3.jpg'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
import '../styles/main.css'
import mainbg from '../backgrounds/mainbg2.jpg'
import mennewsbg from '../backgrounds/mennews.jpg'
import { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import { prDisplay, prDisplaymain } from "../Service/api";
const Mainpage = () => {
   const [products,setProducts]=useState([]);
   useEffect(()=>{
    getProductList();
},[])
const getProductList  = async ()=>
{
    const result= await prDisplay();
    setProducts(result.data);
    console.log(products);
}
const navigate =useNavigate();

function goToView(){
  navigate('/viewproduct',{state:[products]})
}


    

    return(
        <div className='mainpage' style={{backgroundImage:`url(${mainbg})`}}>
            <CollapsibleExample/>


    <div className="carouseldiv" >
    <Carousel fade style={{height:"80vh"}}>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100 h-50"
          src={cimage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100"
          src={cimage2}
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p>Best Color and Best Quality That A Man Can Get</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{objectFit:"cover", maxHeight:"80vh"}}
          className="d-block w-100"
          src={cimage3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    {/* CONTENT AREA */}
    
    <div className="containercat">
        <div className="box">
        <Link to='/men'><img src={men} alt="nothing found"/></Link>
        <h2>Men</h2>
        </div>

        <div className="box" >
        <Link to='/women'><img src={women} alt="nothing found"/></Link>
        <h2>Women</h2>
        </div>

    </div>


        {/* Middle News Sectio */}
    
    
    <div className="mainnews" style={{backgroundImage:`url(${mennewsbg})`}}> 

    <div>
      <h1> 50% Off On All New Winter Products</h1>
      <h2>Check Out New Stuff</h2>
      <button> Go Now</button>

    </div>
      

    </div>

    {/* <div className="newarr">
        <h2 style={{borderBottom:" 1px dotted white" ,width:"12vw"}}>New Arrival</h2>
    </div> */}
    
    {/* Content For Newly Arrive Products: */}

      <div className="NewArrival " >
        <div style={{backgroundColor:"transparent",color:"white",border:"1px solid white"}}>
        <h1> Featured Products</h1>
        </div>
    <div className="row col-12" >
    {
      products.map((products,key) =>(
        
          <div className="display" style={{width:"20vw"}}>    

          <Link to={`/viewproduct/${products._id}`}><img src={products.prImage} alt="nothing" onClick={goToView}/></Link>
          {products.prDescription}
          </div>
          
        
      ))
    }
    </div>
    <button>Load More</button>

    </div>
    <Footer/>


        </div>
    );
     
};
export default Mainpage;