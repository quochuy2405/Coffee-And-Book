import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ItemNews from '../ItemNews';
import './styles.scss';
function ListItemNews({numList}) {
  const [listNews,setListNews]=useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
          try {
            const res = await axios('/news');
            setListNews(res.data.slice(0, numList));
          } catch (error) {

          }
        },[numList]);
  return (
    <div className='ListItemNews'>
      <div className='tiltle_ListNews'>
        <i className='fas fa-newspaper'></i> <h3>Tin Tức</h3>
      </div>

      <Row id='center_item'>
        {listNews.map((item, index) => {
         return <Col key={index} className='Center_Item' xs={12} sm={6} lg={4} xl={3}>
            <ItemNews Item={item} />{' '}
          </Col>
          })
          }
      </Row>
    </div>
  );
}

export default memo(ListItemNews);
