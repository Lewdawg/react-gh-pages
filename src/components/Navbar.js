import { Link, useHistory, Route } from 'react-router-dom';

const Navbar = ({ login, setLogin }) => {

    const history = useHistory();

    const logOut = () => {
        setLogin(false)
        history.push('/')
    }


    return (
        <nav className="navbar">

            <h1>The Laptop Shop</h1>

            <div className="links">

                {/* How we write react links */}
                <Route><Link to="/">Home</Link></Route>

                <Route><Link to="/about">About</Link></Route>

                <Route><Link to="/products">Products</Link></Route>

                {login && <Route><Link to='/addProduct'>Add Product</Link></Route>}

                {!login && <Route><Link to="/login">Login</Link></Route>}

                {!login && <Route><Link to="/signUp">Sign Up</Link></Route>}

                {login && <button id='button' onClick={logOut} value='Log Out'>Log Out</button>}

            </div>
        </nav >
    );
}

export default Navbar;