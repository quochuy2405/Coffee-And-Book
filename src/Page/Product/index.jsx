import React from 'react';
import Header from '../../components/Header';
import SanPhamTuNha from '../../components/SanPhamTuNha';

Product.propTypes = {
    
};

function Product(props) {
    return (
        <div>
                <Header />
                <div className="body_Page">
                <SanPhamTuNha/>
                </div>
        </div>
    );
}

export default Product;