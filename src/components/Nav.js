import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Form from './Form';
import HomePage from './HomePage';

const Nav = () => {
    return(
    <>
    <div>
            <nav>
                <h1>Lambda Eats</h1>
                <div>
                    <Link id to='/'>Home</Link>
                    <Link id='order-pizza' to='/pizza'>Order</Link>
                </div>
            </nav>
        </div>
        
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path= '/pizza' component={Form}/>
        </Switch>
    </>
    )
}

export default Nav;