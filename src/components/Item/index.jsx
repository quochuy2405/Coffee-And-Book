import React from 'react';
import "./styles.scss";

function Iteam(Props) {
    const {Item}=Props;
    return (
    
        <div data-aos="zoom-out-left" data-aos-delay="50"
        data-aos-duration="900" data-aos-once="true"  className="Item">
            
            <div className="Item_img">
                <img src={Item.link_img} alt="" />
            </div>
            <div className="Item_description">
                  <b className="des">{Item.title}</b>
                  <p >{Item.price}</p>
            </div>
            <div className="plus">
                     <i className="fas fa-plus-circle"></i>
            </div>
        </div>
    
    );
}

export default Iteam;