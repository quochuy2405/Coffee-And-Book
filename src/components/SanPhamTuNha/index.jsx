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
    des: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    price: "336000",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cpsd-3in1_971575_400x400.jpg",
    title: "Cà Phê Sữa Đá Hòa Tan",
    des: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
    price: "44000",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/peak-plavor-nopromo_715372_400x400.jpg",
    title: "Cà Phê Peak Flavor Hương Thơm Đỉnh Cao (350G)",
    des: "Được rang dưới nhiệt độ vàng, Cà phê Peak Flavor - Hương thơm đỉnh cao lưu giữ trọn vẹn hương thơm tinh tế đặc trưng của cà phê Robusta Đăk Nông và Arabica Cầu Đất. Với sự hòa trộn nhiều cung bậc giữa hương và vị sẽ mang đến cho bạn một ngày mới tràn đầy cảm hứng.",
    price: "90000",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/rich-finish-nopromo_485968.jpg",
    title: "Cà Phê Sữa Đá",
    price: "90000",
    des: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    Filter: "phegoi",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg",
    title: "Bạc Sỉu",
    des: 'Bạc sỉu chính là "Ly sữa trắng kèm một chút cà phê/". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.',
    price: "32000",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg",
    title: "Caramel Macchiato Đá",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
    price: "50000",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
    title: "Cà Phê Đá Xay-Lạnh",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "59000",
    Filter: "phepha",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/olong-nuong-tran-chau_017573_400x400.jpg",
    title: "Trà sữa Oolong Nướng Trân Châu",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "55000",
    Filter: "trasua",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
    title: "Hồng Trà Sữa Trân Châu",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "55000",
    Filter: "trasua",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/hong-tra-latte_618293_400x400.jpg",
    title: "Hồng Trà Latte Macchiato",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "55000",
    Filter: "trasua",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/tra-nhan-da_484810_400x400.jpg",
    title: "Trà Long Nhãn Hạt Chia",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "45000",
    Filter: "trasua",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/cf-da-xay-(1)_158038_400x400.jpg",
    title: "Cà Phê Đá Xay-Lạnh",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "59000",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_183602_400x400.jpg",
    title: "Cookie Đá Xay",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "59000",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/sinh-to-viet-quoc_145138_400x400.jpg",
    title: "Sinh Tố Việt Quất",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "59000",
    Filter: "choco",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_400940_400x400.jpg",
    title: "Chocolate Đá Xay",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "59000",
    Filter: "choco",
  },

  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-vietqwuoc_130861_400x400.jpg",
    title: "Mochi Kem Việt Quất",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "19000",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-phucbontu_097500_400x400.jpg",
    title: "Mochi Kem Phúc Bồn Tử",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "19000",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-dua_975992_400x400.jpg",
    title: "Mochi Kem Dừa Dứa",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "19000",
    Filter: "banh",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/mochi-xoai_355815_400x400.jpg",
    title: "Mochi Kem Xoài",
    des: "Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",

    price: "19000",
    Filter: "banh",
  },
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
          <i className="fas fa-trophy"></i>
        </div>
        <h3>Sản Phẩm Từ Nhà</h3>
      </div>

      <div className="List_Loai">
        <Row>
          {List_Loai.map((item, index) => (
            <Col xs={6} md={4} lg={2} key={index}>
              <div data-aos="zoom-in" data-aos-duration="900" data-aos-once="true" className="Loai">
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
