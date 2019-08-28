import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componenets
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AllProducts from './products/AllProducts';
import Bracelets from './products/Bracelets';
import Earings from './products/Earings';
import Necklaces from './products/Necklaces';
import Rings from './products/Rings';
import ShoppingCart from './ShoppingCart';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/shopping-cart" exact component={ShoppingCart}></Route>
          <Route path="/products/all" exact component={AllProducts}></Route>
          <Route path="/products/bracelets" exact component={Bracelets}></Route>
          <Route path="/products/earings" exact component={Earings}></Route>
          <Route path="/products/necklaces" exact component={Necklaces}></Route>
          <Route path="/products/rings" exact component={Rings}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
