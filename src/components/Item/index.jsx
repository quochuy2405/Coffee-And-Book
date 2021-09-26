import React from 'react';
import { Col } from 'react-bootstrap';
import "./styles.scss";

function Iteam(Props) {
    const {Item}=Props;
    return (
        <Col xs={6} md={2} className="Center_Item">
        <div className="Item">
            
            <div className="Item_img">
                <img src={Item.link_img} alt="" />
            </div>
            <div className="Item_description">
                  <b>{Item.title}</b>
                  <p>{Item.price}</p>
            </div>
            <div className="plus">
                     <i class="fas fa-plus-circle"></i>
            </div>
        </div>
        </Col>
    );
}

export default Iteam;