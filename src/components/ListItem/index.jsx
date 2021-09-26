import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
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
      console.log(List_Fillter)
  })
  return (
    <Row>
      <div className="ListItems">
        {Filter ? (
          List_Fillter.length===0? (
            <p className="NoIteams"> Không có sản phẩm</p>
          ) : (
            List_Fillter.map((item, index) => (item.Filter === Filter ? <Iteam Item={item} key={index} /> : <></>))
          )
        ) : List_Goiy.length===0? (
          <p className="NoIteams"> Không có sản phẩm</p>
        ) : ( 
            <Row>
            {List_Goiy.map((item, index) => <Iteam Item={item} key={index} />)}
          </Row>
        )}
      </div>
    </Row>
  );
}

export default ListItem;
