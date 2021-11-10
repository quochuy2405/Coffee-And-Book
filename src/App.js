import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Admin from './Page/Admin/index';
import Bill_Search from './Page/Bill_Search';
import Checkout from './Page/Checkout';
import Home from './Page/Home';
import Login from './Page/Login';
import News from './Page/News';
import NotFound from './Page/NotFound';
import { default as Product } from './Page/Product';
import SignIn from './Page/SignIn/index';
import Store from './Page/Store/index.';
import './responsive.css';

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
        <Route path='/bill_seach' component={Bill_Search} exact />
        <Route path='/checkout' component={Checkout} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/auth/admin' component={Admin} exact />
        <Route path='/:slug' component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default memo(App);
