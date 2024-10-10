import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { useCart } from '../store/Cart';
import { MDBBadge } from 'mdb-react-ui-kit';
// import Modal from './Model';

const Navbar = ({ setQuery }) => {
    const {cart}=useCart();
    const [cartview, setCartview] = useState(false);
    const { isLoggedIn } = useAuth();


    const queryInput = (e) => {
        setQuery(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <NavLink className="navbar-brand" to="/">Navbar</NavLink> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">My Orders</NavLink>
                        </li>
                        <li className="nav-item" onClick={() => { setCartview(true) }}>
                            <NavLink className="nav-link active" aria-current="page" to="/my-cart" >
                            My Cart<MDBBadge className='ms-2' color='danger'>
                                    {cart.length}
                                </MDBBadge>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex mx-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={queryInput} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                        {isLoggedIn ? (<li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
                        </li>) : (<>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
                            </li>
                        </>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
