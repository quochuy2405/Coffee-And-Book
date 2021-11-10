import React, { memo, useEffect } from "react";
import Footer from "../../components/Footer";
import ListItemNews from "../../components/ListItemNews";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./styles.scss";

News.propTypes = {};

function News(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="News">
      <div className="body_Page">
        <ListItemNews />
      </div>
      <Footer />
      <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
    </div>
  );
}

export default memo(News);
