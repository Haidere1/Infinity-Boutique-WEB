import '../styles/admin.css'
import adminbg from '../backgrounds/cartbg10.jpg'
import { deletedUser,usergetPfp } from '../Service/api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Userp = () => {

    const {name} =useParams();

    const [userList,setUserList]=useState([])
    useEffect(()=>{
        getUsersList();
    },[])

    const getUsersList  = async ()=>
    {
        const result= await usergetPfp(name);
        setUserList(result.data);
        console.log(userList)
    }

    const handleDelete = async (id)=>
    {
        await deletedUser(id)
        getUsersList();
        
        
    }

    return ( 
        <div className='stbg' style={{backgroundImage:`url(${adminbg})`}}>
            < div classsName="body" style={{color:"white" ,fontFamily:"Quesha"}}>
       <input type="checkbox" id="check" /> 
    <label for="check" >
     <i class="fas fa-bars" id="btn">MENU</i>
      <i class="fas fa-times" id="cancel">X</i> 
    </label> 
    <div class="sidebar">
    <header>Admin</header>
  <ul style={{fontSize:"xxx-Large"}}>
<li>User List</li>

<Link to='/products'><li>Products</li></Link>


</ul>
</div>
        </div>

<div className="col-md-6 position-absolute start-50 translate-middle-x mt-3">


    
    <table className='table' style={{color:"white",border:"1px solid white"}}>
        <thead>
            <tr style={{color:"gold"}}>
                <th scope='col'>User Name</th>
                <th scope='col'> Email</th>
                <th scope='col'>Contact</th>
                <th scope='col'>Image</th>

                
            </tr>
        </thead>
        <tbody>

        <h1></h1>
        {/* {
            userList.map((details)=>
            (
                <tr style={{border:"1px solid white"}}>
                        <td style={{borderLeft:"1px solid white",borderRight:"1px solid white"}}>{details.userName}</td>
                        <td style={{borderLeft:"1px solid white",borderRight:"1px solid white"}}>{details.email}</td>
                        <td style={{borderLeft:"1px solid white",borderRight:"1px solid white"}}>{details.contact}</td>
                        <td style={{borderLeft:"1px solid white",borderRight:"1px solid white"}}><img className='primage' src={details.userImage} alt="nothing"></img></td>
                        <td><button className='btn btn-danger' onClick={()=>handleDelete(details._id)}> Delete</button></td>
                       

                    </tr>
            ))
        } */}
            
            
        </tbody>
    </table>

</div>

{}

        </div>

     );
}
 
export default Userp;