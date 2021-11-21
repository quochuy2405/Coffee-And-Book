import { useSnackbar } from 'notistack';
import React, { memo, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../app/AuthContext';
import './styles.scss';
 function SignIn(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [dataFrom, setDataform] = useState({
    Username: '',
    Password: '',
    Email: '',
    Phone:'',
    ConfirmPassword: '',
  });

  var rediect=useHistory();
  const { Username,Phone, Password,ConfirmPassword,Email } = dataFrom;
  const OnchangedataForm = (event) =>
    setDataform({ ...dataFrom, [event.target.name]: event.target.value });
  const { signUpUser } = useContext(AuthContext);
  const SignIn = async (event) => {
    event.preventDefault();
    if(Password.length>0 && Password===ConfirmPassword)
    {
      
          try {
            const signindata = await signUpUser(dataFrom);
            console.log(signindata);
            enqueueSnackbar(signindata, { variant: 'success' });
            rediect.push("/login")
          } catch (error) {
            console.log(error);
          }
    }
    else{
      enqueueSnackbar('Mật khẩu không khớp', { variant: 'error' });
    }
    
  };

  return (
    <div className='body_Page'>
      
      <div className='SignIn'>
        {' '}
        <div className='signinFrom'>
          <div className='img_group'>
            <i className='content'>Cùng thưởng thức một tách cà phê nào !!!</i>
            <img
              src='https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=2260&h=2750&dpr=1'
              alt=''
            />
          </div>
          <div className='signin'>
  
            <form onSubmit={SignIn} > {/* onSubmit={SignIn}*/}
              <h2 className='title'>Đăng Ký</h2>
              <div className='input_signin input_username'>
                <i className='fas fa-user-astronaut'></i>
                <input
                  type='text'
                  id='username'
                  name='Username'
                  placeholder='Tên đăng nhập'
                  onChange={OnchangedataForm}
                  value={Username}
                  required
                />
              </div>
              <div className='input_signin input_username'>
              <i className="fad fa-envelope"></i>
                <input
                  type='email'
                  id='email'
                  name='Email'
                  placeholder='Email'
                  onChange={OnchangedataForm}
                  value={Email}
                  required
                />
              </div>
              <div className='input_signin input_email'>
              <i className="fas fa-mobile-alt"></i>
                <input
                  type='text'
                  id='Phone'
                  name='Phone'
                  placeholder='Số điện thoại'
                  onChange={OnchangedataForm}
                  value={Phone}
                  required
                />
              </div>
              <div className='input_signin input_password'>
              <i className="fal fa-lock-alt"></i>
                <input
                  type='password'
                  className='input_password'
                  name='Password'
                  placeholder='Mật khẩu'
                  value={Password}
                  onChange={OnchangedataForm}
                  required
                />
              </div>
              <div className='input_signin input_password'>
              <i className="far fa-check-circle"></i>
                <input
                  type='password'
                  className='input_password'
                  name='ConfirmPassword'
                  placeholder='Nhập lại mật khẩu'
                  value={ConfirmPassword}
                  onChange={OnchangedataForm}
                  required
                />
              </div>

              <button type='submit' className='btn btn-success'>
                <b>Đăng ký</b>
              </button>
            </form>
  
          </div>

          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
}
export default memo(SignIn);