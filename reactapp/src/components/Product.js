import React, {useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { API_URL } from '../config'

const Product = () => {
    const [prod, setProd]=useState({
        id:0,
        name:"",
        product_img:"",
        price:""
    })
    let {product_id}=useParams();
    let navigate=useNavigate()

    useEffect(() => {
        getProduct();  
    }, [product_id])

    const getProduct= async () =>{
        let response= await fetch(`http://127.0.0.1:8000/payment/product/${product_id}/`)
        let data= await response.json()
        setProd(data)
        
        console.log(data)
    }
  const handleCheckout=()=>{
         navigate(`/checkout/${prod.id}`)
    }
    return (
        <div className='container'>
            <div className='card'>
                <img src={prod?.product_image} alt="" className='p_img'/>
                <div>
                    <h3>{prod?.name}</h3> 
                    <p>$ {prod?.price}</p>
                </div>            
                    <button onClick={handleCheckout} className='btn'>
                        Checkout
                    </button>
            </div>
        </div>
    )
}

export default Product
