import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SanPhamTuNha from "../../components/SanPhamTuNha";
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
    </div>
  );
}

export default Product;
