import React, { useEffect } from 'react';
import { auth, facebookProvider } from '../../components/firebase_Loginfb';

NotFound.propTypes = {
    
};

function NotFound(props) {
    const HandleFacebook=()=>{
        auth.signInWithPopup(facebookProvider)
        console.log(auth.signInWithPopup(facebookProvider))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="body_Page">
           <button type="button" class="btn btn-success" onClick={HandleFacebook}>Login FB</button>
        </div>
    );
}

export default NotFound;