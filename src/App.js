import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo, useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Admin from './Page/Admin/index';
import BillSeach from './Page/Bill_Search';
import Checkout from './Page/Checkout';
import Home from './Page/Home';
import Login from './Page/Login';
import News from './Page/News';
import NotFound from './Page/NotFound';
import { default as Product } from './Page/Product';
import Store from './Page/Store/index.';
import './responsive.css';
import SignIn from './Page/SignIn/index';
import Nav_mobile from './components/Nav_Mobile/index';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>   

    <div className='App'>
   
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/product' component={Product} exact />
        <Route path='/news' component={News} exact />
        <Route path='/store' component={Store} exact />
        <Route path='/bill_seach' component={BillSeach} exact />
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/auth/admin' component={Admin} exact />
        <Route path='/:slug' component={NotFound} />
      </Switch>
     
      <MessengerCustomerChat pageId='111223271362400' appId='477337363536411' />
    </div>
    </>
  );
}

export default memo(App);
