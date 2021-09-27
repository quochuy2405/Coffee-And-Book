import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListItemNews from '../../components/ListItemNews';
import "./styles.scss"

News.propTypes = {
    
};

function News(props) {
    return (
        <div className="News">
            <Header/>
            <div className="body_Page">
            <ListItemNews/>
            </div>
            <Footer/>
        </div>
    );
}

export default News;