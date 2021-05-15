import './App.css';

//React Imports
import { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//File Imports
import Home from './components/Home.js';
import Navbar from './components/Navbar.js'
import Login from './components/Login.js';
import About from './components/About.js';
import Products from './components/Products.js'
import ProductDetails from './components/ProductDetails.js';
import AddProduct from './components/AddProduct.js'
import SignUp from './components/SignUp';


function App() {

  //Login Access state & Function
  const [login, setLogin] = useState(false);

  const ProtectRoute = (props) => {
    if (!login) return <Redirect to='/login' />
    return <Route {...props} />
  }

  return (
    <div className="App">

      {/* All Route get passed through and 'basename' before hand */}
      <BrowserRouter basename={"/react-gh-pages"}>

        <Navbar login={login} setLogin={setLogin} />

        <Switch>

          <Route exact path='/' component={Home} />

          <Route path='/about' component={About} />

          <ProtectRoute exact path='/products' component={Products} />

          <ProtectRoute exact path='/products/:id' component={ProductDetails} />

          <ProtectRoute exact path='/addProduct' component={AddProduct} />

          {/* Written differently because we pass a prop with the path */}
          <Route path='/signUp'>
            <SignUp setLogin={setLogin} />
          </Route>

          <Route path='/login'>
            <Login setLogin={setLogin} />
          </Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
