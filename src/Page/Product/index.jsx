import React, { memo, useEffect } from "react";
import Footer from "../../components/Footer";
import SanPhamTuNha from "../../components/SanPhamTuNha";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./styles.scss";
function Product(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Product">
      <div className="body_Page">
        <SanPhamTuNha />
      </div>
      <Footer />
      <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
    </div>
  );
}

export default memo(Product);
