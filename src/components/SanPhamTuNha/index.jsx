import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ListItem from "../ListItem";
import "./styles.scss";
const List_Loai = [
  {
    title: "Cà Phê Gói- Uống liền",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_cpg_web.png",
    Filter: "phegoi",
  },
  {
    title: "Cà Phê",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_coffee_web.png",
    Filter: "phepha",
  },
  {
    title: "Trà Trái Cây - Trà Sữa",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_tea_milk_tea_web.png",
    Filter: "trasua",
  },
  {
    title: "Đá Xay - Choco - Matcha",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_frappu_web.png",
    Filter: "choco",
  },
  {
    title: "Bánh - Snack",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_snack_web.png",
    Filter: "banh",
  },
  {
    title: "Bộ sưu tập quà tặng",
    link_img: "https://minio.thecoffeehouse.com/image/tch-web-order/category-thumbnails/cg_merchandise_web.png",
    Filter: "qua",
  },
];
const List_Item = [
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/24-lon-cpsd_225680_400x400.jpg",
    title: "Thùng 24 Lon Cà Phê Sữa Đá",
    price: "336.000đ",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cpsd-3in1_971575_400x400.jpg",
    title: "Cà Phê Sữa Đá Hòa Tan",
    price: "44.000đ",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/peak-plavor-nopromo_715372_400x400.jpg",
    title: "Cà Phê Peak Flavor Hương Thơm Đỉnh Cao (350G)",
    price: "90.000đ",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/rich-finish-nopromo_485968.jpg",
    title: "Cà Phê Sữa Đá",
    price: "90.000đ",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg",
    title: "Cà Phê Sữa Đá",
    price: "32.000đ",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg",
    title: "Bạc Sỉu",
    price: "32.000đ",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    title: "Caramel Macchiato Đá",
    price: "50.000đ",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
    title: "Cà Phê Đá Xay-Lạnh",
    price: "59.000đ",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/olong-nuong-tran-chau_017573_400x400.jpg",
    title: "Trà sữa Oolong Nướng Trân Châu",
    price: "55.000đ",
    Filter: "trasua",
  }, {
    link_img: "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
    title: "Hồng Trà Sữa Trân Châu",
    price: "55.000đ",
    Filter: "trasua",
  }, {
    link_img: "https://minio.thecoffeehouse.com/image/admin/hong-tra-latte_618293_400x400.jpg",
    title: "Hồng Trà Latte Macchiato",
    price: "55.000đ",
    Filter: "trasua",
  }, {
    link_img: "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
    title: "Trà Long Nhãn Hạt Chia",
    price: "45.000đ",
    Filter: "trasua",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
    title: "Cà Phê Đá Xay-Lạnh",
    price: "59.000đ",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_183602_400x400.jpg",
    title: "Cookie Đá Xay",
    price: "59.000đ",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/sinh-to-viet-quoc_145138_400x400.jpg",
    title: "Sinh Tố Việt Quất",
    price: "59.000đ",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_400940_400x400.jpg",
    title: "Chocolate Đá Xay",
    price: "59.000đ",
    Filter: "choco",
  },
  
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-vietqwuoc_130861_400x400.jpg",
    title: "Mochi Kem Việt Quất",
    price: "19.000đ",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-phucbontu_097500_400x400.jpg",
    title: "Mochi Kem Phúc Bồn Tử",
    price: "19.000đ",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-dua_975992_400x400.jpg",
    title: "Mochi Kem Dừa Dứa",
    price: "19.000đ",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-xoai_355815_400x400.jpg",
    title: "Mochi Kem Xoài",
    price: "19.000đ",
    Filter: "banh",
  } 
];

function SanPhamTuNha(props) {
  const [Filter, SetFilter] = useState(List_Loai[0].Filter);
  const [List_Fillter, SetList_Fillter] = useState(List_Item);

  useEffect(() => {
    document.querySelectorAll(".Loai_img")[0].classList.add("active");
  }, []);
  function ChangeActive(index, filter) {
    const Loaiactive = document.querySelector(".Loai_img.active");
    const listLoai = document.querySelectorAll(".Loai_img");
    if (Loaiactive) {
      Loaiactive.classList.remove("active");
    }
    listLoai[index].classList.add("active");
    SetFilter(filter);
  }
  useEffect(() => {
    const Temp = [];
    List_Item.map((item) => {
      if (item.Filter === Filter) {
        Temp.push(item);
      }
    });
    SetList_Fillter(Temp);
  }, [Filter]);
  return (
    <div className="SanPhamTuNha">
      <div className="Title_Section">
        <div className="icon">
          <i class="fas fa-trophy"></i>
        </div>
        <h3>Sản Phẩm Từ Nhà</h3>
      </div>

      <div className="List_Loai">
          <Row>
        {List_Loai.map((item, index) => (
            <Col xs={6} md={4} lg={2} >
          <div className="Loai">
            <div className="Loai_img" onClick={() => ChangeActive(index, item.Filter)}>
              <img src={item.link_img} alt="" />
            </div>
            <p>{item.title}</p>
          </div>
          </Col>
        ))}
        </Row>
      </div>
      <div className="List_Loai-Item">{<ListItem Filter={Filter} List_Fillter={List_Fillter} />}</div>
    </div>
  );
}

export default SanPhamTuNha;
