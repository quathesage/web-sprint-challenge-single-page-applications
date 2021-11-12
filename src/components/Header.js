import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    <div>
        <Link>Home</Link>
        <Link>Order</Link>
    </div>
}

const Header = () => {
    return (
        <div>
            <h2>Lambda Eats</h2>
            <p>Best pizza in town</p>
        </div>
    )
}

export default Header;