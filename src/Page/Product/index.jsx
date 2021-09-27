import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SanPhamTuNha from '../../components/SanPhamTuNha';
import "./styles.scss"
function Product(props) {
    return (
        <div className="Product">
                <Header />
                <div className="body_Page">
                <SanPhamTuNha/>
                </div>
                <Footer/>
        </div>
    );
}

export default Product;