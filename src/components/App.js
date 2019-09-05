import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componenets
import Navbar from './Navbar';
import LandingPage from './main/LandingPage';
import ProductItem from './products/ProductItem';
import Products from './products/Products';
import ShoppingCart from './ShoppingCart';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
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
