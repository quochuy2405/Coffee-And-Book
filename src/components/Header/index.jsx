import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Page/Login";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import ListTicket from "../listTicket";
import { actionKM } from "../../app/KMOpen";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
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
    strick:1
  },
];

function Header(props) {
  const [open, setOpen] = useState(false);
const KMOpen = useSelector(state => state.KMOpen)
const dispatch = useDispatch();
  var counterBill = useSelector((state) => state.counterBill);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenKM = () => {
      dispatch(actionKM(true))
  };
  function ChangeActive(class_Name) {
    const Loaiactive = document.querySelector(".chon.active");
    const changeadrss = document.querySelector(".Hearder__IpAddress");
    if (Loaiactive) {
      Loaiactive.classList.remove("active");
    }
    document.querySelector(class_Name).classList.add("active");

    if (class_Name === ".choose_mangdi") {
      document.querySelector(".choose_input_text").placeholder = "Tìm cửa hàng theo quận huyện";
      changeadrss.querySelector(".Trans__img img").src =
        "https://minio.thecoffeehouse.com/images/tch-web-order/Pickup2.png";
      changeadrss.querySelector(".Trans__text p:first-child").innerText = "Mang đi";
      changeadrss.querySelector(".Trans__text p:nth-child(2)").innerText = "Tại:Tìm cửa hàng theo quận huyện";
    } else {
      document.querySelector(".choose_input_text").placeholder = "Vui lòng nhập địa chỉ";
      changeadrss.querySelector(".Trans__img img").src =
        "https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png";
      changeadrss.querySelector(".Trans__text p:first-child").innerText = "Giao hàng";
      changeadrss.querySelector(".Trans__text p:nth-child(2)").innerText = "Tại:Vui lòng nhập địa chỉ";
    }
  }

  useEffect(() => {
    const changeadrss = document.querySelector(".Hearder__IpAddress");
    document.querySelector(".choose_input_text").addEventListener("input", function (evt) {
      changeadrss.querySelector(".Trans__text p:nth-child(2)").innerText = `Tại:${this.value}`;
    });
  });

  return (
    <div className="Header">
      <label htmlFor="check_choose"></label>
      <input id="check_choose" type="checkbox" style={{ display: "none" }} name="" />
      <label className="overlay" htmlFor="check_choose"></label>
      <div className="choose_ForBuy">
        <div className="choose">
          <div className="chon choose_giaohang active" onClick={() => ChangeActive(".choose_giaohang")}>
            <img
              className="choose_img"
              src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
              alt=""
            />
            <b className="choose_text">Giao hàng</b>
          </div>
          <div className="chon choose_mangdi" onClick={() => ChangeActive(".choose_mangdi")}>
            <img
              className="choose_img"
              src="https://minio.thecoffeehouse.com/images/tch-web-order/Pickup2.png"
              alt=""
            />
            <b className="choose_text">Mang đi</b>
          </div>
        </div>
        <div className="choose_input">
          <input className="choose_input_text" type="text" name="" id="" placeholder="Vui lòng nhập địa chỉ" />
          <img
            className="btn_clear"
            data-v-367d85a4=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBrZTbccIwEEVXmoFv//MYuwNSQUIFSSoI6SCpAKggoQLoIKQCJhXEHZjw+Oebl3OvxwqKLRtC2BmwtCsf35V2pcRhURR5lUqlo5S6juO4BZefhkL4prvd7r3ZbI5c76qsYzab3Wmthxh6UmIpuJ8Fa3uyWCxeAHs7BqNBuc8PL5fLrlMhA1jUk/PstV6vP/8AoayDx1D+Yfv9/h7pjw0wksPG27aSfPouX+LfbDaBTtX52SjS72PBFYZT4+NB0MeYA5hUhsaiW9fXttvtKAgCAtqEErZer9v0MZYqzYq4UVD4iXErG7QBqEufPjOGkokrK75DYCwFZkM5L4MZ03JhI3AqR9RRGX/2nhbwQh5K6AisbBjTrFarkwzUdShfGn8fDqAHwIO9Z2w1A2VMHLWINWOV3iyRFBSrnFjY3KJarRZopLBC2zyK27wTfcKbh8/klNmDkDuQM42dY66xX/fhfD7vQXr3j7BBo9F4MvPcBZv2NqG+lFuyVczOdqqi1QSzz3m6cmhN9nTIykDpsNdzpfMNzwr4YQY4/g8AAAAASUVORK5CYII="
            alt=""
          ></img>
        </div>
      </div>
      <div className="Hearder__TilteName">
        <Link to="/">
          <h4>THE COFFEE HOUSE</h4>
        </Link>
      </div>
      <label htmlFor="check_choose" id="Header_tran" className="Hearder__IpAddress">
        <div className="Trans__img">
          <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
        </div>

        <div className="Trans__text">
          <p>Giao Hàng</p>
          <p className="address">Tại:Nhập địa chỉ giao hàng</p>
        </div>
        <div className="arrow_down">
          <i className="fas fa-chevron-down"></i>
        </div>
      </label>
      <div id="Nav_Link" className="Header__NavLink">
        <ul>
          {List_NavLink.map((Item, index) =>
            Item.link ? (
              <li key={index} >
                <NavLink to={Item.link}>
                  <p>{Item.tilte_link}</p>
                </NavLink>
              </li>
            ) : (
              <li key={index} onClick={handleClickOpenKM} >
                <p>{Item.tilte_link}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <Login open={open} setOpen={setOpen} />
      <ListTicket open={KMOpen}/>
      <div className="Header__User_Store">
        <div className="homeIcon">
          <Link to="/">
            <i class="fas fa-home"></i>
          </Link>
        </div>
        <div className="icon_user" onClick={handleClickOpen}>
          <i className="far fa-user-circle"></i>
        </div>

        <div className="icon_store">
          {" "}
          <StyledBadge badgeContent={counterBill} color="secondary" className="icon_checkout">
            <Link to="/Checkout">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </StyledBadge>
        </div>
        <div>
          <i class="fas fa-hamburger hamber"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
