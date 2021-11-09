import React from 'react';
import { storage } from "../firebase_uploadimg"
import { useState } from 'react';
import { useSnackbar } from 'notistack';
function AddProduct(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [image,setImage]=useState(undefined);
    const [urlImage,setUrlimage]=useState(undefined);
    var HandleChange= e =>{
        if(e.target.files[0])
        {
            setImage(e.target.files[0])
        }
    }
    const HandleUpload=()=>{
        if(image)
        {      enqueueSnackbar('Tải lên thành công', { variant: 'success' });
            // const UploadTask = storage.ref(`imageProducts/${image.name}`).put(image);
            // UploadTask.on(
            //     "state_changed",
            //     snapshot =>{},
            //     error =>{
            //         console.log(error);
            //     },
            //     ()=>{
            //         storage
            //         .ref("imageProducts")
            //         .child(image.name)
            //         .getDownloadURL()
            //         .then(url=>{
            //           setUrlimage(url)
            //           console.log("Image:",urlImage)
            //           enqueueSnackbar('Tải lên thành công', { variant: 'success' });
            //         })
            //         .catch((error)=>{
            //           enqueueSnackbar('Tải lên thất bại', { variant: 'error' });
      
            //         })
            //     }
            // )
        }
        else{
            enqueueSnackbar('Hãy chọn tệp tin', { variant: 'warning' });
        }
      
    }
    console.log("Image:",urlImage)
    return (
        <div>
            <input type="file" onChange={HandleChange} />
            <button type="button" onClick={HandleUpload} className="btn btn-warning">Tải lên</button>
        </div>
    );
}

export default AddProduct;