import React, { memo, useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
         <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
        </div>
    );
}

export default memo(Cart);