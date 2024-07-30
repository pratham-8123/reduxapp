import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdraw, deposit } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='container my-2'>
            <h2>Deposit / Withdraw Money</h2>
            <button className="btn-primary mx-2 my-1" onClick={() => { withdraw(100) }} >-</button>
            Update Balance
            <button className="btn-primary mx-2 my-1" onClick={() => { deposit(100) }} >+</button>
        </div>
    )
}

export default Shop;
