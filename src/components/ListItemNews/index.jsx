import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemNews from "../ItemNews";
import "./styles.scss";
const List_News = [
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
    title: "Nghệ thuật pha chế - Cold Brew",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8430_grande-1.jpg",
    title: "Nghệ thuật pha chế - Espresso",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
    title: "Nghệ thuật pha chế - Cold Brew",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8430_grande-1.jpg",
    title: "Nghệ thuật pha chế - Espresso",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8668_grande.jpg",
    title: "Nghệ thuật pha chế - Cold Brew",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
  {
    link_img: "https://feed.thecoffeehouse.com/content/images/2021/08/img_8430_grande-1.jpg",
    title: "Nghệ thuật pha chế - Espresso",
    description: "Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ ngày mua).",
  },
];

function ListItemNews(props) {
  return (
    <div className="ListItemNews">
      <div className="tiltle_ListNews">
        <i className="fas fa-newspaper"></i> <h3>Tin Tức</h3>
      </div>

      <Row id="center_item">
        {List_News.map((item, index) => (
          <Col key={index} className="Center_Item" xs={12} sm={6} lg={4} xl={3}>
            {" "}
            <ItemNews Item={item} />{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ListItemNews;
