import React from 'react';
import "./styles.scss"

function ItemNews(props) {
    const {Item}=props;
    return (
        <div className="New">
            <div className="New_img">
                <img src={Item.link_img} alt="" />
            </div>
            <p>{Item.title}</p>
            <p>{Item.description}</p>
            <div className="btn_watch"></div>
            
        </div>
    );
}

export default ItemNews;