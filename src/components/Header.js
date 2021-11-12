import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    <div>
        <Link id to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order</Link>
    </div>
}

const Header = () => {
    return (
        <div>
            <h2>Lambda Eats</h2>
            <p>Best pizza in town</p>

            <Nav />
        </div>
    )
}

export default Header;