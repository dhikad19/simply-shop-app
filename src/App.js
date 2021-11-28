import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Catalogue from './pages/catalogue';
import ProductList from './pages/productlist';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Product from './pages/productpage';
import CartPage from './pages/cartpage';


function App () {
  return (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/catalogue" component={Catalogue} exact />
      <Route path="/productlist" component={ProductList} exact />
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/product" component={Product} exact />
      <Route path="/cartpage" component={CartPage} exact />
    </Switch>
  </Router>
  );
}

export default App;