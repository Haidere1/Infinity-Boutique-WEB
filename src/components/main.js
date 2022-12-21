import CollapsibleExample from "./navbar";
import Carousel from 'react-bootstrap/Carousel';
import cimage1 from '../images/cimage1.jpg'
import cimage2 from '../images/cimage2.jpg'
import cimage3 from '../images/cimage3.jpg'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
import '../styles/main.css'
import bg7 from '../images/bgnew.jpg'
import cl1 from '../clothes/cl1.jpg'
import cl2 from '../clothes/cl2.jpg'
import cl3 from '../clothes/cl3.jpg'
import cl4 from '../clothes/cl4.jpg'
import cl5 from '../clothes/cl5.jpg'
import cl6 from '../clothes/cl6.jpg'
import cl7 from '../clothes/cl7.jpg'
import cl8 from '../clothes/cl8.jpg'
import { useRef, useState } from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Mainpage = (e) => {
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
        <div className='mainpage' style={{backgroundImage:`url(${bg7})`}}>
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
        <img src={men} alt="nothing found"/>
        <h2>Men</h2>
        </div>

        <div className="box" >
        <Link to='/women'><img src={women} alt="nothing found"/></Link>
        <h2>Women</h2>
        </div>

    </div>

    {/* <div className="newarr">
        <h2 style={{borderBottom:" 1px dotted white" ,width:"12vw"}}>New Arrival</h2>
    </div> */}
    
    {/* Content For Newly Arrive Products: */}

      <div className="NewArrival glass" >
    <div className="row col-12" >
    {
      products.map((products,key) =>(
        
          <div className="display" style={{width:"20vw"}}>        
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
export default Mainpage;