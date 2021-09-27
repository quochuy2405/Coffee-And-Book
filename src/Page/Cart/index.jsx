import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

Cart.propTypes = {
    
};

function Cart(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
           <Header/>
        </div>
    );
}

export default Cart;