import axios from 'axios';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  // const [authstate, dispatch] = useReducer(authReducer, {
  //   authLoading: true,
  //   isAuthenticated: false,
  //   user: null,
  // });

  const loginUser = async datafrom=> {
    try {
      const response = await axios('/user');
      
      if (response.data.userId) {
        console.log(response.data)
        localStorage.setItem('accessToken', response.data.userId);
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const signUpUser = async datafrom=> {
    try {
      const response = await axios({
        method: 'post',
        url: '/signup',
        data:datafrom
      })
      if (response.data.userId) {
        localStorage.setItem('accessToken', response.data);
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: 'Fail' };
    }
   
  };
  const authContextData = { loginUser,signUpUser };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;