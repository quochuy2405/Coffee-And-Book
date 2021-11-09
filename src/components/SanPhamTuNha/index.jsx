import React, { useEffect, useState ,memo} from "react";
import { Col, Row } from "react-bootstrap";
import ListItem from "../ListItem";
import "./styles.scss";
import data from"../../data";
const List_Loai = data.Sanphamtunha.LoaiSP;
const List_Item = data.Sanphamtunha.ListSP;

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
    List_Item.forEach((item) => {
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
        <i className="fad fa-trophy-alt"></i>
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

export default memo(SanPhamTuNha);
