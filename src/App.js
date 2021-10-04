import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import './responsive.css';
import Header from './components/Header';
import BillSeach from './Page/Bill_Search';
import Checkout from './Page/Checkout';
import DashBoard from './Page/DashBoard';
import Home from './Page/Home';
import News from './Page/News';
import NotFound from './Page/NotFound';
import { default as Pay, default as Product } from './Page/Product';
import Store from './Page/Store/index.';
import Cart from './Page/Cart';

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
       <Route path="/test" component={Cart}exact/>
       <Route path="/:slug" component={NotFound}/>
       
     </Switch>
     </div>
  );
}

export default App;
