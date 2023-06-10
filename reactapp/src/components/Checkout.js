import React,{useState, useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';



const stripePromise = loadStripe("pk_test_51IBev4JnWlmnG27uqt62oM3NULHTQYULGaA2BroTxffTYvErhxSqZrerC2mjl8wKEJ8TeqLoEykUiV8A4ibSOOZs00DQBfokyW");

const Checkout = () => {
   
    const [clientsecret, setClientSecret]=useState('')
    const {prod_id}=useParams();
    console.log(prod_id)
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/payment/create-payment-intent/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(prod_id),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [])
    
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret:clientsecret
      };

      

     
  return (
    <div className='container'>
        {clientsecret && (
        <Elements  stripe={stripePromise} options={options}>
             <PaymentForm/>
        </Elements>
      )}
    </div>
  )
}

export default Checkout