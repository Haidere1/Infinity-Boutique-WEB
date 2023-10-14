import '../styles/admin.css'
import adminbg from '../backgrounds/cartbg10.jpg'
import { deletedUser, productAddition, prDisplay, deleteProduct } from '../Service/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FileBase64 from 'react-file-base64'

const Prodcuts = () => {

    const [productData, SetPrData] = useState(
        {
            prID: 0,
            prName: "",
            prPrice: "",
            prDescription: "",
            prImage: ""
        }
    )
    const { prID, prName, prPrice, prDescription, prImage } = productData;

    const handleChange = (e) => {
        console.log("Product Data ")
        SetPrData({ ...productData, [e.target.name]: [e.target.value] })

    }

    const prAddition = async (e) => {
        e.preventDefault();
        await productAddition(productData);

        window.alert("Successfully Added Product")
        getProductList();


    }

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, prAddition())

    const getProductList = async () => {
        const result = await prDisplay();
        setProductList(result.data);
    }

    const handleDelete = async (id) => {
        await deleteProduct(id)
        .then(()=>
        {
            getProductList();
        })



    }
    

    return (
        <div className=' container-fluid' style={{ backgroundImage: `url(${adminbg})` }}>
            < div classsName="body" style={{ color: "white", fontFamily: "Quesha" }}>
                <input type="checkbox" id="check" />
                <label for="check" >
                    <i class="fas fa-bars" id="btn">MENU</i>
                    <i class="fas fa-times" id="cancel">X</i>
                </label>
                <div class="sidebar">
                    <header>Admin</header>
                    <ul style={{ fontSize: "xxx-Large" }}>
                        <Link to='/admin'><li>Users</li></Link>

                        <li>Products</li>


                    </ul>
                </div>
            </div>

            <div className="col-md-8 mt-3" style={{ marginLeft:"150px" }}>
                <div className='praddition'>

                    <h3 > Product ID</h3>
                    <input type='text' placeholder='Product ID' onChange={(e) => handleChange(e)} name='prID' value={prID}></input>

                    <h3 > Product Name</h3>
                    <input type='text' placeholder='Product Name' onChange={(e) => handleChange(e)} name='prName'></input>

                    <h3>Price</h3>
                    <input type='text' placeholder='Price' onChange={(e) => handleChange(e)} name='prPrice'></input>
                    <h3>Description</h3>
                    <input type='text' placeholder='Product Info' onChange={(e) => handleChange(e)} name='prDescription'></input>
                    <h3>Image</h3>
                    {/* <input type='text' placeholder='URL' onChange={(e) => handleChange(e)} name='prImage'></input> */}

                    <FileBase64
                    multiple={false}
                    onDone={({base64})=>SetPrData({...productData,prImage:base64})}
                    />

                    <button className='btn btn-primary' onClick={(e) => prAddition(e)}> Add Product</button>

                </div>
                <table className='table' style={{ color: "green", border: "1px solid white", marginTop: "30px" }}>
                    <thead>
                        <tr style={{ color: "gold" }}>
                            <th scope='col'>Product ID</th>
                            <th scope='col'>Product Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Image</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map((details) =>
                            (
                                <tr style={{ border: "1px solid white" }}>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prID}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prName}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prPrice}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>{details.prDescription}</td>
                                    <td style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}><img className='primage' src={details.prImage} alt='nothing here'></img></td>
                                    <td><button className='btn btn-danger' onClick={() => handleDelete(details._id)}> Delete</button></td>
                                    <td><Link to={`/editproduct/${details._id}`}><button className='btn btn-primary'> Edit</button> </Link></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>


            </div>



        </div>

    );
}

export default Prodcuts;