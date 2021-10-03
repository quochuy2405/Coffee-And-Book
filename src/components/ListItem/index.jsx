import React from "react";
import { Col, Row } from "react-bootstrap";
import Iteam from "../Item";
import "./styles.scss";
const List_Goiy = [
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45000",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45000",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45000",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45000",
  },
];
function ListItem(props) {
  const { Filter, List_Fillter } = props;
  return (
    <Row>
      <div className="ListItems">
        {Filter ? (
          List_Fillter.length === 0 ? (
            <div className="NoIteams"> <b>Không có sản phẩm</b> </div>
          ) : (
            List_Fillter.map((item, index) =>
              item.Filter === Filter ? (
                <Col  key={index} className="Center_Item" xs={6} md={6} lg={3} xl={2}>
                  {" "}
                  <Iteam Item={item} />
                </Col>
              ) : (
                <div key={index}></div>
              )
            )
          )
        ) : List_Goiy.length === 0 ? (
          <div className="NoIteams"> <b>Không có sản phẩm</b> </div>
        ) : (
          List_Goiy.map((item, index) => (
            <Col  key={index} className="Center_Item" xs={12} sm={6}  md={6}  lg={4} xl={3}>
              {" "}
              <Iteam Item={item} />
            </Col>
          ))
        )}
      </div>
    </Row>
  );
}

export default ListItem;
