import { Link, useHistory } from 'react-router-dom';

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
                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/products">Products</Link>

                {login && <Link to='/addProduct'>Add Product</Link>}

                {!login && <Link to="/login">Login</Link>}

                {!login && <Link to="/signUp">Sign Up</Link>}

                {login && <button id='button' onClick={logOut} value='Log Out'>Log Out</button>}

            </div>
        </nav >
    );
}

export default Navbar;