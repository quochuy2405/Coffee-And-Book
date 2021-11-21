import { createContext } from 'react';
import { useState } from 'react';

 export const HandleLogin = createContext();

export default function Login ({ children }){
    const [Login,setLogin]=useState({
      name:'Đăng Nhập',
      value:1
      }
      )
      const Item={
        LoginSign:Login,
        setLoginSign:setLogin
      }
        
    
  return <HandleLogin.Provider value={Item}>{children}</HandleLogin.Provider>;
};
