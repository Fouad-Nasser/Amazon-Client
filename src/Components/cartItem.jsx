import React, { useState } from 'react';
import Quantity from './quantity';
import { useDispatch } from 'react-redux';
import { addToCart, rmvToCart } from '../Store/Actions/cartActions';

const CartItem = (props) => {
    const {item, updateTotalPrice} = props;

    const [Qty, setQty] = useState(item.quantity);
    const dispatch = useDispatch();




    const handleClick = (i)=>{
        setQty(i)
        item.quantity = i;
        dispatch(addToCart(item))
        updateTotalPrice();
    }

    const removeItem = (id)=>{
        dispatch(rmvToCart(id))
    }

    return (
        <div className="row cart-item p-2 justify-content-between">
            <div className="img col-3 text-center">
                <img src={item.image} alt="" className='w-75'/>
            </div>

            <div className="desc col-6">
                <h4>{item.name}</h4>
                <span className='text-success d-block'>{item.instock && 'in stock'}</span>
                <span className='d-block'>
                    <span style={{fontWeight:'bolder'}}>Color: </span>
                    {item.color}
                </span>
                <Quantity 
                    num={Qty}
                    handleClick={handleClick}
                    qty={item?.instock}
                />
                
                <div className='m-1'>
                    <span
                    style={{color:'dodgerblue',cursor:'pointer'}}
                    onClick={()=>{removeItem(item.product)}}
                    >
                        Delete
                    </span>
                </div>
            </div>

            <div className="img col-2" style={{textAlign:'right'}}>
                <h3>${item.price}</h3>
            </div>


        </div>
    );
};

export default CartItem;