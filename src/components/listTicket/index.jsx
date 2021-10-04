import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { actionKM } from "../../app/KMOpen";
import Ticket from "../Ticket";
import "./styles.scss";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const List_Ticket = [
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/storage/852__C4_90o_CC_82_CC_80ng-gia_CC_81-29K_coupon.jpg",
    title: "Đồng giá 29k Caramel",
    text_size: "Macchiato Đá (M)",
    due_to: "Hết hạn 31/10/2021",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
    title: "Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ",
    text_size: "Macchiato Đá (M)",
    due_to: "Hết hạn 31/10/2021",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
    title: "Ưu đãi 20% đơn Pickup 2 món bất kỳ",
    text_size: "Macchiato Đá (M)",
    due_to: "Hết hạn 31/10/2021",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg",
    title: "Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ",
    text_size: "Macchiato Đá (M)",
    due_to: "Hết hạn 31/10/2021",
  },
  {
    link_img: "https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg",
    title: "Ưu đãi 20% đơn Pickup 2 món bất kỳ",
    text_size: "Macchiato Đá (M)",
    due_to: "Hết hạn 31/10/2021",
  },
];
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <i class="fas fa-times"></i>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function ListTicket(props) {
  const {open} = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actionKM(open))
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" className="d-flex justify-content-center" onClose={handleClose}>
         <b className="font_km">Khuyến mãi</b>
        </BootstrapDialogTitle>
          <p className="ss_use">Sẵn sàng sử dụng</p>
        <div className="ListTicket">
          {List_Ticket.map((item, index) => (
            <Ticket item={item} key={index} />
          ))}
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default ListTicket;
