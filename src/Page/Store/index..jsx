import React, { memo, useEffect } from "react";
import ListStore from "../../components/List_Store";
import Slider from "../../components/Slider";
import MessengerCustomerChat from 'react-messenger-customer-chat';
Store.propTypes = {};

function Store(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="body_Page">
        <div className="Slider_Home pt-4">
          <Slider />
        </div>
        <ListStore />
      </div>
      <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
    </div>
  );
}

export default memo(Store);
