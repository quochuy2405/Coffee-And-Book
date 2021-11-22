import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Iteam from '../../components/Item';
import './styles.scss';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen  yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Bill() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <>
      <h2 className='title'>Hóa đơn của bạn</h2>
      <div style={{ padding: '10px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align='right'>Calories</StyledTableCell>
                <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                  <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                  <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
function Favorites() {
  const [list, SetList] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const res = await axios('/products');
    SetList(res.data);
  }, []);
  return (
    <>
      <h2 className='title'>Sản phẩm bạn yêu thích</h2>
      <div className='SanPhamTuNha'>
        <div className='ListItems'>
          <Row>
            {list.map((item, index) => (
              <Col key={index} className='Center_Item' xs={12} sm={6} xl={4}>
                {' '}
                <Iteam Item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
function Destination() {
  const [value, setValue] = useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className='infoAcc'>
        <h2 className='title'>Thông Tin Tài Khoản </h2>

        <table className='tableInfoAcc'>
          <tr>
            <td>Tên khách hàng</td>
          </tr>
          <tr className='space-center'>
            <td>
              {' '}
              <input
                class='form-control '
                id='exampleDataList'
                placeholder='Họ'
              />
            </td>
            <td>
              {' '}
              <input
                class='form-control '
                id='exampleDataList'
                placeholder='Tên'
              />
            </td>
          </tr>
          <tr>
            <td>Số điện thoại</td>
          </tr>
          <tr>
            <td>
              {' '}
              <input
                class='form-control '
                id='exampleDataList'
                maxLength={11}
                placeholder='09xxxxxxxx'
              />
            </td>
          </tr>
          <tr>
            <td>Sinh nhật</td>
          </tr>
          <tr>
            <td>
              {' '}
              <input
                type='date'
                class='form-control '
                placeholder='DD/MM/YYYY'
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
          </tr>
          <tr>
            <td>
              {' '}
              <input
                type='email'
                class='form-control '
                id='exampleDataList'
                placeholder='example@gmail.com'
              />
            </td>
          </tr>

          <tr style={{ textAlign: 'right' }}>
            <button type='button' class='btn btn-outline-success'>
              Cập nhật
            </button>
          </tr>
        </table>
      </div>
    </>
  );
}
function DetailsUser(props) {
  const [value, setValue] = useState(0);
  return (
    <div className='body_Page'>
      <div className='DetailsUser'>
        <div className='InfoPerson'>
          <div className='Info-Center'>
            <div className='avata'>
              <img
                src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=950&w=1260'
                alt=''
              />
            </div>

            <div className='infoUser'>
              <div className='name'>
                <h3>One Direction</h3>
              </div>
              <div className='email'>
                <p>Email: huy0168231920@gmail.com</p>
              </div>
              <div className='phone'>
                <p>Phone: 0963639201</p>
              </div>
            </div>
          </div>
        </div>
        <div className='InfoDetails'>
          <Row>
            <Col className='Center_Item' xs={12}>
              {' '}
              <Box sx={{ width: 500 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}>
                  <BottomNavigationAction
                    label='Đơn hàng'
                    icon={<i class='fad icon-tag fa-file-invoice-dollar'></i>}
                  />
                  <BottomNavigationAction
                    label='Yêu tích'
                    icon={<i class='fad icon-tag fa-crown'></i>}
                  />
                  <BottomNavigationAction
                    label='Thông tin tài khoản '
                    icon={<i class='fad icon-tag fa-user-crown'></i>}
                  />
                </BottomNavigation>
              </Box>
            </Col>
          </Row>

          <div className='bodyInfoDetails'>
            {value === 0 ? (
              <Bill />
            ) : value === 1 ? (
              <Favorites />
            ) : (
              <Destination />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsUser;
