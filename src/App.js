import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/shop/sign-in-sign-up/sign-in-sign-up.component';


function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </switch>
    </div>
  );
}

export default App;
