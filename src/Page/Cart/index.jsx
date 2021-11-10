import React, { memo, useEffect } from 'react';
import ListTicket from '../../components/listTicket';

Cart.propTypes = {
    
};

function Cart(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="body_Page">
         <ListTicket/>
        </div>
    );
}

export default memo(Cart);