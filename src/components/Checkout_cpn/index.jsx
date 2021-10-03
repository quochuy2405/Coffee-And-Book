import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseBill, reset } from "../../app/CounterBill";
import "./styles.scss";
function Checkout_com(props) {
   const [get,SetGet]=useState(JSON.parse(localStorage.getItem("LISTBILL") || "[]"));
  var Total=0;
  const dispatch = useDispatch();
  get.forEach(element => {
    Total=Total+element.price;
    return Total;
  });
  function removeItem(index)
  {
    SetGet(JSON.parse(localStorage.getItem("LISTBILL"))||[]);
    if(get.length)
    { console.log(JSON.parse(localStorage.getItem("LISTBILL")).length)
      const a= get.slice(0,index);
      const b= get.slice(index+1,JSON.parse(localStorage.getItem("LISTBILL")).length);
      localStorage.setItem("LISTBILL",JSON.stringify([...a,...b])) 
      SetGet(JSON.parse(localStorage.getItem("LISTBILL")));
      console.log(b)
      console.log(JSON.parse(localStorage.getItem("LISTBILL")).length)
      console.log(JSON.parse(localStorage.getItem("LISTBILL")))
     
      dispatch(decreaseBill())
    }
  
   
  }
 
  return (
    <div className="Checkout_com">
      <div className="Checkout_com_Title">
        <i className="fa fa-file"></i>
        <h3>Xác nhận đơn hàng</h3>
      </div>
      <div className="checkout__body">
        <div className="body__Pay">
          <div className="type_buy">
            <div className="type">
              <p className="type_Name">Giao Hàng</p>
              <div className="change_type">
                <p>Đổi phương thức</p>
              </div>
            </div>
            <div className="info_type">
              <div className="info_imgType">
                <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Pickup2.png" alt="" />
              </div>
              <div className="info_des">
                <div className="location d-flex justify-content-between">
                  <div>
                    <b>Quaaak Technology Solutions Pvt. Ltd.</b>
                    <p>
                      Quaaak Technology Solutions Pvt. Ltd., F3, 20, Vaishika Enclave, Bhavani Amman Koil St,
                      RamaKrishna Nagar, Adambakkam, Chennai, Tamil Nadu 600088, Ấn Độ
                    </p>
                  </div>{" "}
                  <div className="d-flex flex-column justify-content-center">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </div>

                <div className="time d-flex justify-content-between">
                  <div>
                    <b>Nhận hàng trong ngày 15-30 phút</b>
                    <p>Vào lúc: Càng sớm càng tốt</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <i className="fa fa-chevron-right "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form action="" method="post">
            <div className="input_address">
              <div className="input_info">
                <input type="text" name="" id="" placeholder="Tên người nhận" required />
              </div>
              <div className="input_info">
                <input type="text" name="" id="" required />
              </div>
              <div className="input_info">
                <input type="text" name="" id="" placeholder="Thêm hướng dẫn đặt hàng" />
              </div>
            </div>

            <div className="pay_for">
              <p className="type_Name">Phương thức thanh toán</p>
              <div className="checkpay">
                <input type="radio" name="pay" id="tienmat" />
                <label htmlFor="tienmat">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                    alt=""
                  />
                  <span>Tiền mặt</span>
                </label>
              </div>
              <div className="checkpay">
                <input type="radio" name="pay" id="momo" />
                <label htmlFor="momo">
                  <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png" alt="" />
                  <span>MoMo</span>
                </label>
              </div>

              <div className="checkpay">
                <input type="radio" name="pay" id="zalopay" />
                <label htmlFor="zalopay">
                  <img src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png" alt="" />
                  <span>ZaloPay</span>
                </label>
              </div>

              <div className="checkpay">
                <input type="radio" name="pay" id="shopeepay" />
                <label htmlFor="shopeepay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png"
                    alt=""
                  />
                  <span>ShopeePay</span>
                </label>
              </div>
            </div>
            <div className="agree">
              <input type="checkbox" name="" id="" />{" "}
              <span>
                {" "}
                Đồng ý với các điều khoản và{" "}
                <span>
                  <Link to="#/"> điều kiện mua hàng </Link>
                </span>{" "}
                của The Coffee House
              </span>
            </div>
          </form>
        </div>
        <div className="body__bill">
          <div className="bill">
            <p className="bill_Name">Các món đã chọn</p>
            <div className="add_item">
              <p>Thêm món</p>
            </div>
          </div>
          <ul className="list__bill">
            {
              get.map((item,index)=>(
            
                <li key={index} className="list__bill-Iteam">
                <div className="list_fix">
                  <i className="fa fa-pen"></i>
                </div>
                <div className="list_text">
                  <b className="tilte_item">{item.title} </b>
  
                  <p className="size">{item.size}</p>
                  <p className="btn_delete" onClick={()=>removeItem(index)}>Xóa</p>
                </div>
                <div className="list_price">
                  <p>{(item.price).toLocaleString(undefined,{ minimumFractionDigits: 0 })}đ</p>
                </div>
              </li>
            
              ))
            }
         
        
         
          
          </ul>
          <div className="Total">
            <p className="bill_Name">Tổng cộng</p>
            <div className="thanhtien">
              <p>Thành tiền</p>
              <p className="price_total">{(Total).toLocaleString(undefined,{ minimumFractionDigits: 0 })}đ</p>
            </div>{" "}
            <div className="khuyenmai d-flex justify-content-between">
              <p>Khuyến mãi</p>
              <i className="fa fa-chevron-right"></i>
            </div>{" "}
            <div className="dathang d-flex justify-content-between p-2 lh-3">
               <div className="thanhtien_main d-flex flex-column justify-content-center">
                 <p>Thành tiền</p>
                 <p className="price_total">{(Total).toLocaleString(undefined,{ minimumFractionDigits: 0 })}đ</p>
               </div>
               <div className="btn_dathang d-flex flex-column justify-content-center ">
                 <p>Đặt hàng</p>
               </div>
            </div>
          </div>
          <div className="delete_Bill" >
             <p onClick={()=>{localStorage.removeItem("LISTBILL");SetGet([]);dispatch(reset());}}>Xóa tất cả</p> 
             </div>
        </div>
        
      </div>

    </div>
  );
}

export default Checkout_com;
