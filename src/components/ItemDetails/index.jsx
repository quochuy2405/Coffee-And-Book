import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch } from 'react-redux';
import { increaseBill } from '../../app/CounterBill';
import './styles.scss';
import { PropTypes } from 'prop-types';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <i className='fas fa-times'></i>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: propTypes.node,
  onClose: propTypes.func,
};
CustomizedDialogs.propTypes = {
  Item: PropTypes.object.isRequired,
  setOpen: PropTypes.func,
  open: PropTypes.func,
};
CustomizedDialogs.defaultProps = {
  setOpen: null,
  open: null,
};
export default function CustomizedDialogs(Props) {
  const { open, setOpen, Item } = Props;
  const [size, Setsize] = useState(0);
  const [count, setcount] = useState(1);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClose = () => {
    setOpen(false);
  };
  function AddItems_Success() {
    dispatch(increaseBill());
    setOpen(false);
    enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant: 'success' });
    const temp = {
      title: `${count}x ${Item.title}`,
      size: size ? `Vừa,x${count}` : `Nhỏ,x${count}`,
      price: count * Item.price + size * count,
    };

    var get = JSON.parse(localStorage.getItem('LISTBILL') || '[]');
    get.push(temp);
    localStorage.setItem('LISTBILL', JSON.stringify(get));
  }
  function decrease() {
    setcount(count - 1);
    if (count < 2) setcount(1);
  }
  function increase() {
    setcount(count + 1);
  }
  return (
    <div className='ItemDetails'>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}>
        <BootstrapDialogTitle
          id='customized-dialog-title'
          className='d-flex justify-content-center'
          onClose={handleClose}>
          Thêm món mới
        </BootstrapDialogTitle>
        <DialogContent dividers className="Width_details">
          <div className='bodyDetails'>
            <div className='imgDetail'>
              <img src={Item.link_img} alt='' />
            </div>
            <div className='Details'>
              <div>
              <b className='Details_Title'>{Item.title}</b>
              <p className="Details_des">{Item.des}</p>
              </div>
             
              <div className='price_number d-flex justify-content-left'>
                <p className='price'>
                  {(Item.price * 1).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}
                  đ
                </p>
                <div className='btn_number d-flex justify-content-around'>
                  <i className='fas fa-minus-circle' onClick={decrease}></i>
                  <p>{count}</p>
                  <i className='fas fa-plus-circle' onClick={increase}></i>
                </div>
              </div>
            </div>
          </div>
          <div className='choose_size '>
            <div className='tilte_size'>
              <p>CHỌN SIZE (BẮT BUỘC)</p>
            </div>
            <div className='choose d-flex '>
              <div>
                <input
                  type='radio'
                  name='size'
                  id='min'
                  defaultChecked
                  onClick={() => Setsize(0)}
                />
                <label htmlFor='min'>Nhỏ(+0)</label>
              </div>
              <div>
                <input
                  type='radio'
                  name='size'
                  id='mid'
                  onClick={() => Setsize(5000)}
                />
                <label htmlFor='mid'>Vừa(+5,000)</label>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={AddItems_Success} className='btn_choose'>
            {' '}
            {(count * Item.price + size * count).toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}
            đ- Thêm vào giỏ hàng
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
