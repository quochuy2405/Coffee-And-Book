import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
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
     </div>

    </div>
  );
}

export default Home;
