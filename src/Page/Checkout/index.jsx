import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Checkout_com from '../../components/Checkout_cpn';
import Footer from '../../components/Footer';
function Checkout(props) {
    var counterBill=useSelector(state => state.counterBill);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <> 
        {
         counterBill===0?<Redirect to="/Product"/>: <div className="body_Page">
         <Checkout_com/>
         <Footer/>
     </div>
        }
        
       
        </>
    );
}

export default Checkout;