import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { memo, useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import BillSeach from './Page/Bill_Search';
import Checkout from './Page/Checkout';
import DashBoard from './Page/DashBoard';
import Home from './Page/Home';
import Login from './Page/Login';
import News from './Page/News';
import NotFound from './Page/NotFound';
import { default as Pay, default as Product } from './Page/Product';
import Store from './Page/Store/index.';
import './responsive.css';
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

     <div className="App">
   
     <Header /> 
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/Product" component={Product} exact/>
       <Route path="/Pay" component={Pay} exact/>    
       <Route path="/News" component={News} exact/>
       <Route path="/Store" component={Store}exact/>
       <Route path="/Bill_Seach" component={BillSeach}exact/>
       <Route path="/Checkout" component={Checkout}exact/>
       <Route path="/DashBoard" component={DashBoard}exact/>
       <Route path="/login" component={Login}exact/>
       <Route path="/:slug" component={NotFound}/>
     </Switch>
     <MessengerCustomerChat
        pageId="111223271362400"
        appId="477337363536411"
     />
     </div>
  );
}

export default memo(App);
