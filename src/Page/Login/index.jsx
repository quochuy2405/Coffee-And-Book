import React from 'react';
import './styles.scss';
export default function Login(props) {
  return (
    <div className='body_Page'>
      <div className='Login'>
        {' '}
        <div className='loginFrom'>
          <div className='img_group'>
            <i className="content">Cùng thưởng thức một tách cà phê nào !!!</i>
            <img
              src='https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=2260&h=2750&dpr=1'
              alt=''
            />
          </div>
          <div className='login'>
            <form action='#' method='POST'>
              <h2 className='title'>Đăng nhập</h2>
              <div className='input_login input_username'>
                <i class='fas fa-user-astronaut'></i>
                <input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Tên đăng nhập'
                />
              </div>

              <div className='input_login input_password'>
                <i class='fas fa-lock'></i>
                <input
                  type='text'
                  className='input_password'
                  name='password'
                  placeholder='Mật khẩu'
                />
              </div>

              <button type='submit' class='btn btn-success'>
                <b>Đăng nhập</b>
              </button>
            </form>
            <a href='#' className='forgot_pass'>
              {' '}
              Quên mật khẩu ?
            </a>
          </div>

          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
}
