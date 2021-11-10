import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import CheckoutCom from '../../components/CheckoutCom';
import Footer from '../../components/Footer';
import MessengerCustomerChat from 'react-messenger-customer-chat';
function Checkout(props) {
    var counterBill=useSelector(state => state.counterBill);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <> 
        {
         counterBill===0?<Redirect to="/Product"/>: <div className="body_Page">
         <CheckoutCom />
         <Footer/>
        </div>
        }
             <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
        </>
    );
}

export default memo(Checkout);