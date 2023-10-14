
import '../styles/admin.css'
import adminbg from '../backgrounds/cartbg10.jpg'
import { editPr, prDisplay } from '../Service/api'
import { useEffect, useState, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const EditProducts = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        prID: 0,
        prName: "",
        prDescription: "",
        prPrice: "",
        prImage: ""
    });
    const { prID, prName, prDescription, prPrice, prImage } = product;
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: [e.target.value] })
        console.log(e.target.value)

    }
    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        const result = await prDisplay(id);
        setProduct(result.data);
    }

    const editProduct = async () => {
        await editPr(id, product)
            .then(() => {
                alert("done")
                navigate("/products")
                console.log(product)
            })
    }


    return (
        <div className='stbg' style={{ backgroundImage: `url(${adminbg})` }}>
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

            <div className="col-md-8 position-absolute start-50 translate-middle-x mt-3" >
                <div className='praddition'>

                    <h3 > Product ID</h3>
                    <input type='text' placeholder='Product ID' onChange={(e) => handleChange(e)} name='prID' value={prID}></input>

                    <h3 > Product Name</h3>
                    <input type='text' placeholder='Product Name' onChange={(e) => handleChange(e)} name='prName' value={prName}></input>

                    <h3>Price</h3>
                    <input type='text' placeholder='Price' onChange={(e) => handleChange(e)} name='prPrice' value={prPrice}></input>
                    <h3>Description</h3>
                    <input type='text' placeholder='Product Info' onChange={(e) => handleChange(e)} name='prDescription' value={prDescription}></input>
                    <h3>Image</h3>
                    <input type='text' placeholder='URL' onChange={(e) => handleChange(e)} name='prImage' value={prImage}></input>

                    <button className='btn btn-primary' onClick={() => editProduct()} > Edit Product</button>

                </div>



            </div>



        </div>

    );

}

export default EditProducts;
