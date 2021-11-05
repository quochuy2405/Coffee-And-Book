import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import ItemNews from "../ItemNews";
import "./styles.scss";
import data from "../../data";
const List_News = data.listBao;
function ListItemNews(props) {
  return (
    <div className="ListItemNews">
      <div className="tiltle_ListNews">
        <i className="fas fa-newspaper"></i> <h3>Tin Tức</h3>
      </div>

      <Row id="center_item">
        {List_News.map((item, index) => (
          <Col key={index} className="Center_Item" xs={12} sm={6} lg={4} xl={3}>
        
            <ItemNews Item={item} />{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default memo(ListItemNews);
