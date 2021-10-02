import React, { useEffect } from 'react';
import Checkout_com from '../../components/Checkout_cpn';
import Footer from '../../components/Footer';

function Checkout(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="body_Page">
            <Checkout_com/>
            <Footer/>
        </div>
    );
}

export default Checkout;