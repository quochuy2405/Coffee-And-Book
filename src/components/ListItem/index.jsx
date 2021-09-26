import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Iteam from "../Item";
import "./styles.scss";
const List_Goiy = [
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45,000đ",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45,000đ",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45,000đ",
  },
  {
    link_img: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
    title: "Chà Bông Phô Mai",
    price: "45,000đ",
  },
];
function ListItem(props) {
  const { Filter, List_Fillter } = props;
  useEffect(() => {
    console.log(List_Fillter);
  });
  return (
    <Row>
      <div className="ListItems">
        {Filter ? (
          List_Fillter.length === 0 ? (
            <p className="NoIteams"> Không có sản phẩm</p>
          ) : (
            List_Fillter.map((item, index) =>
              item.Filter === Filter ? (
                <Col className="Center_Item" xs={6} sm={4} lg={2}>
                  {" "}
                  <Iteam Item={item} key={index} />
                </Col>
              ) : (
                <></>
              )
            )
          )
        ) : List_Goiy.length === 0 ? (
          <p className="NoIteams"> Không có sản phẩm</p>
        ) : (
          List_Goiy.map((item, index) => (
            <Col className="Center_Item" xs={12} sm={6} lg={3}>
              {" "}
              <Iteam Item={item} key={index} />
            </Col>
          ))
        )}
      </div>
    </Row>
  );
}

export default ListItem;
