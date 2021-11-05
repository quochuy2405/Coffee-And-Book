import { createContext } from 'react';
import { useState } from 'react';

 export const HandleLoginSign = createContext();

export default function LoginSign ({ children }){
    const [LoginSign,setLoginSign]=useState('Đăng Nhập')
        
    
  return <HandleLoginSign.Provider value={[LoginSign,setLoginSign]}>{children}</HandleLoginSign.Provider>;
};
