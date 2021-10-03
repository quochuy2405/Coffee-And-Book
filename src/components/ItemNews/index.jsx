import React from 'react';
import "./styles.scss"

function ItemNews(props) {
    const {Item}=props;
    return (
        <div data-aos="zoom-in-down" data-aos-duration="800" data-aos-once="true" className="New">
            <div className="New_img">
                <img src={Item.link_img} alt="" />
            </div>
            <p>{Item.title}</p>
            <p className="News_des">{Item.description}</p>
            <div className="btn_watch"></div>
            <div className="btn_news">
                <p>Xem</p>
            </div>
        </div>
    );
}

export default ItemNews;