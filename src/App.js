import { Route, Switch } from 'react-router';
import './App.css';
import BillSeach from './Page/Bill_Search';
import DashBoard from './Page/DashBoard';
import Home from './Page/Home/index,';
import News from './Page/News';
import NotFound from './Page/NotFound';
import Product from './Page/Product';
import Pay from './Page/Product';
import Store from './Page/Store/index.';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div className="App">
     <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/Product" component={Product} exact/>
       <Route path="/Pay" component={Pay} exact/>    
       <Route path="/News" component={News} exact/>
       <Route path="/Store" component={Store}exact/>
       <Route path="/Bill_Seach" component={BillSeach}exact/>
       <Route path="/DashBoard" component={DashBoard}exact/>
       <Route path="/:slug" component={NotFound}/>
       
     </Switch>
     </div>
  );
}

export default App;
