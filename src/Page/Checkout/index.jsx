import React from 'react';
import Checkout_com from '../../components/Checkout_cpn';
import Footer from '../../components/Footer';

function Checkout(props) {
    return (
        <div className="body_Page">
            <Checkout_com/>
            <Footer/>
        </div>
    );
}

export default Checkout;