import React, { useState } from 'react';
import './cart.css';
import { useSelector } from 'react-redux';
import CartItem from '../../Components/cartItem';


const Cart = () => {
    const {cartItems} = useSelector(state => state.cart);
    const [TotalPrice, setTotalPrice] = useState(calcTotalPrice())

    function calcTotalPrice() {
        let totalPrice = 0;
        for (let i of cartItems) {
            totalPrice += (i.price * i.quantity)
        }
        return totalPrice;
    }

    function updateTotalPrice() {
        setTotalPrice(calcTotalPrice());
    }

    return (
        <div className='row bg-light cart my-3'>
            <div className="col-8">
                <div className='cart-header'>
                    <h1>Shopping Cart</h1>
                    <span>Price</span>
                </div>
                <hr />

                {
                    cartItems.lenght?
                    cartItems.map((i,index)=>
                        <CartItem 
                        key={index} 
                        item={i}
                        updateTotalPrice={()=>{updateTotalPrice()}}
                        />
                    )
                    :<p className='h2'>No Items on Cart</p>
                }

                <hr />
                <h3 style={{textAlign:'right'}}>Total Price: ${TotalPrice}</h3>
                
            </div>
            <div className="total-price col-3 p-2">
                <h3>Total Price: ${TotalPrice}</h3>
                <button className='btn btn-warning w-100'>Proceed to checkout</button>
            </div>
        </div>
    );
};

export default Cart;