import React, { useState } from 'react';
import CustomizedDialogs from '../ItemDetails';
import "./styles.scss";
function Iteam(Props) {
    const [ open, setOpen]=useState(false)
    const handleOpen=()=>{
  
      setOpen(true);
    }
    const {Item}=Props;
    return (
          <>
        <div data-aos="zoom-out-left" data-aos-delay="50"
        data-aos-duration="900" data-aos-once="true"  className="Item">
            
            <div className="Item_img">
                <img src={Item.link_img} alt="" />
            </div>
            <div className="Item_description">
                  <b className="des">{Item.title}</b>
                  <p >{(Item.price*1).toLocaleString(undefined,{ minimumFractionDigits: 0 })}đ</p>
            </div>
            <div className="plus" onClick={handleOpen}>
                     <i className="fas fa-plus-circle"></i>
            </div>
        </div>
        <CustomizedDialogs Item={Item}  open= {open} setOpen={setOpen}/>
        </>

    
    );
}

export default Iteam;