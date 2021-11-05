import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Iteam from '../Item';
import './styles.scss';
import data from '../../data';
import { memo } from 'react';
const List_Goiy = data.GoiY;
function ListItem(props) {
  const { Filter, List_Fillter } = props;
  return (
    <Row>
      <div className='ListItems'>
        {Filter ? (
          List_Fillter.length === 0 ? (
            <div className='NoIteams'>
              {' '}
              <b>Không có sản phẩm</b>{' '}
            </div>
          ) : (
            List_Fillter.map((item, index) =>
              item.Filter === Filter ? (
                <Col
                  key={index}
                  className='Center_Item'
                  xs={6}
                  md={6}
                  lg={3}
                  xl={2}>
                  {' '}
                  <Iteam Item={item} />
                </Col>
              ) : (
                <div key={index}></div>
              )
            )
          )
        ) : List_Goiy.length === 0 ? (
          <div className='NoIteams'>
            {' '}
            <b>Không có sản phẩm</b>{' '}
          </div>
        ) : (
          List_Goiy.map((item, index) => (
            <Col
              key={index}
              className='Center_Item'
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}>
              {' '}
              <Iteam Item={item} />
            </Col>
          ))
        )}
      </div>
    </Row>
  );
}

export default memo(ListItem);
