import React from 'react';
import '../css/App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './commons/Navbar';
import LandingPage from './main/LandingPage';
import ProductItem from './products/ProductItem';
import Products from './products/Products';
import ShoppingCart from './products/ShoppingCart';
import Header from './commons/Header';
import Footer from './commons/Footer';

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/shoppingcart" exact component={ShoppingCart}></Route>
          <Route path="/products/:category" exact component={Products}></Route>
          <Route
            path="/product/:productId"
            exact
            component={ProductItem}
          ></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
