import React from 'react';
import { storage } from "../firebase_uploadimg"
import { useState } from 'react';
function AddProduct(props) {
    const [image,setImage]=useState(undefined);
    const [urlImage,setUrlimage]=useState(undefined);
    var HandleChange= e =>{
        if(e.target.files[0])
        {
            setImage(e.target.files[0])
        }
    }
    const HandleUpload=()=>{
      const UploadTask = storage.ref(`imageProducts/${image.name}`).put(image);
      UploadTask.on(
          "state_changed",
          snapshot =>{},
          error =>{
              console.log(error);
          },
          ()=>{
              storage
              .ref("imageProducts")
              .child(image.name)
              .getDownloadURL()
              .then(url=>{
                setUrlimage(url)
                console.log("Image:",urlImage)
              })
          }
      )
    }
    console.log("Image:",urlImage)
    return (
        <div>
            <input type="file" onChange={HandleChange} />
            <button type="button" onClick={HandleUpload} class="btn btn-warning">Tải lên</button>
        </div>
    );
}

export default AddProduct;