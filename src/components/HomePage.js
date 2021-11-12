import React from 'react';

export default function HomePage(props) {
    return (
        <div>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
                alt='Cheese pizza'
            />
            <button
                className='order-button'
            >
                Order Here
            </button>
        </div>
    )
}