import './App.css';

import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Home from './components/Home.js';
import Navbar from './components/Navbar.js'
import Login from './components/Login.js';
import About from './components/About.js';
import Products from './components/Products.js'
import ProductDetails from './components/ProductDetails.js';
import AddProduct from './components/AddProduct.js'
import SignUp from './components/SignUp';




function App() {

  const [login, setLogin] = useState(false);

  const ProtectRoute = (props) => {
    if (!login) return <Redirect to='/login' />
    return <Route {...props} />
  }

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar login={login} setLogin={setLogin} />

        <Switch>

          <Route exact to='/' component={Home} />

        </Switch>

        {/* <Switch>

          <Route exact to='/' component={Home} />
           <Home exact path='/' /> 

          <About path='/about' />

          <ProtectRoute exact path='/products' component={Products} />

          <ProtectRoute exact path='/products/:id' component={ProductDetails} />

          <ProtectRoute exact path='/addProduct' component={AddProduct} />

          <SignUp path='/signUp' setLogin={setLogin} />
          <Login path='/login' setLogin={setLogin} />

        </Switch> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
