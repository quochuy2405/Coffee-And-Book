import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import ListItemNews from "../../components/ListItemNews";
import SanPhamTuNha from "../../components/SanPhamTuNha";
import Slider from "../../components/Slider";
import "./styles.scss";

function Home() {
  const [check, SetCheck] = useState();
  function ChangeActive(tem) {
    const Tagactive = document.querySelector(".Tag.active");
    if (Tagactive) {
      Tagactive.classList.remove("active");
    }
    document.querySelector(tem).classList.add("active");
    if (tem === ".Ganday") {
      SetCheck(1);
    } else {
      SetCheck(undefined);
    }
  }
  useEffect(() => {
    SetCheck(undefined);
  }, []);
  return (
    <div className="Home">
      <Header />
      <div className="body_Page">
        <div className="Slider_Home pt-4">
          <Slider />
        </div>
      </div>
      <div className="GoiY">
        <div className="Tags">
          <ul>
            <div className="icon">
              <i class="fas fa-lightbulb"></i>
            </div>
            <li className="Tag active goiy" onClick={() => ChangeActive(".goiy")}>
              Nhà gợi ý cho bạn
            </li>
            <li className="Tag Ganday" onClick={() => ChangeActive(".Ganday")}>
              Đặt gần đây
            </li>
          </ul>
        </div>
        <div className="Subject_Tag">
          {check ? (
            <div className="Btn_Login">
              <p>Đăng Nhập</p>
            </div>
          ) : (
            <ListItem />
          )}
        </div>
      </div>
     <div className="SanPham">
             <SanPhamTuNha/>
             <div className="TinTuc">
                 <ListItemNews/>
             </div>
           
     </div>
     <div className="gg_play">
       <div className="logo"> <img src="https://www.thecoffeehouse.com/_nuxt/img/squarelogo.035676b.png" alt="" /></div>
       <img className="img_large" src="https://www.thecoffeehouse.com/_nuxt/img/newappv6.f2e1281.png" alt="" />
     </div>
     
        <Footer/>
    </div>
  );
}

export default Home;
