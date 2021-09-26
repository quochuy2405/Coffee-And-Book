import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const List_NavLink = [
  {
    tilte_link: "Đặt Hàng",
    link: "/Product",
  },
  {
    tilte_link: "Tin tức",
    link: "/News",
  },
  {
    tilte_link: "Cửa Hàng",
    link: "/Store",
  },
  {
    tilte_link: "Khuyến mãi",
  },
  {
    tilte_link: "DashBoard",
    link: "/DashBoard",
  },
];

function Header(props) {
  return (
    <div className="Header">
      <div className="Hearder__TilteName">
        <Link to="/">
        <h4>THE COFFEE HOUSE</h4>
        </Link>
      </div>
      <div className="Hearder__IpAddress d-flex">
        <div className="Trans__img">
          <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
        </div>

        <div className="Trans__text">
          <p>Giao Hàng</p>
          <p>Tại:Nhập địa chỉ giao hàng</p>
        </div>
        <div className="arrow_down">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="Header__NavLink">
        <ul>
          {List_NavLink.map((Item) =>
            Item.link ? (
              <li>
                <Link to={Item.link}>
                  <p>{Item.tilte_link}</p>
                </Link>
              </li>
            ) : (
              <li>
                <p>{Item.tilte_link}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="Header__User_Store">
        <div className="icon_user">
          {" "}
          <Link to="/User">
            <i class="far fa-user-circle"></i>{" "}
          </Link>
        </div>

        <div className="icon_store">
          {" "}
          <Link to="/Store">
            <i class="fas fa-shopping-basket"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
