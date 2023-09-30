// App.js
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import CheckoutSidebar from './components/CheckoutSidebar';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <CheckoutSidebar />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

