import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './product_detalis.css';
import Stars from '../../Components/stars';
import SetReview from '../../Components/setreview/SetReview';
import Quantity from '../../Components/quantity';

function ProductDetalis(props) {
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [imgIndx, setImgIndx] = useState(0);

    const productId = '6417574b7505b8e0d7cc74e8';

    useEffect(() => { 
        axios.get(`http://localhost:8000/products/6417574b7505b8e0d7cc74e8`)
        .then(res =>{
            const prod = res.data.result;
            console.log(prod);
            setProduct(prod);
        })

        axios.get(`http://localhost:8000/products/6417574b7505b8e0d7cc74e8/reviews`)
        .then(res =>{
            const result = res.data.data;
            console.log(result);
            setReviews(result);
        })
     },[]);


     const hoverHandler = (indx) => {
        setImgIndx(indx);
    };

        return (
            <div className='p-3'>
            <div className='row product_detalis'>
                <div className="col-4" id='product_imgs'>
                    <div className="left">
                        <div className="left_1">
                            {product?.images.map((image, i) => (
                                <div
                                    className={i === imgIndx ? 'img_wrap active' : 'img_wrap'}
                                    key={i}
                                    onMouseOver={() => hoverHandler(i)}
                                >
                                    <img src={image} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="left_2">
                            <img src={product?.images[imgIndx]} alt="" />
                        
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <h1>{product?.name}</h1>
                    <span className='text-info d-block'>Brand: {product?.brand}</span>
                    <span>Rated: <span className='text-info'>Everyne</span></span>
                     <div>
                        <Stars rating={product?.rating} color="orange"/> 
                        <span className='ms-1 text-info'>ratings</span>
                     </div>
                     <hr />
                     <span className='h3'>${product?.price}</span>
                     <div>
                         <span style={{color:'#333'}}>color:</span>
                         <span className='h3'>{product?.color}</span>
                     </div>
                    <hr />
                    <h3> About this item </h3>
                    <p>{product?.description}</p>
                </div>
                <div className="col-2 addToCart">
                    <span className='h3 d-block my-2'>${product?.price}</span>
                    <span className='side_data'>$71.43 Shipping & Import Fees </span>
                    <span className='side_data'>Deposit to Egypt</span>
                    <span className='side_data'>Delivery April 5 - 25</span>

                    <span className='d-block my-3'>
                        <i className="bi bi-geo-alt"></i>
                        <span className='text-info'>Deliver To Egypt</span>
                    </span>

                    <span className='h3 text-success side_data'>in stock</span>

                    <Quantity qty={product?.instock}/>

                    <button className='btn btn-warning w-100 my-3'>Add To Cart</button>

                    <div>
                         <span style={{color:'#666'}}>Ships from:</span>
                         <span style={{fontWeight:'bolder'}}> Amazon</span>
                     </div>

                     <div>
                         <span style={{color:'#666'}}>Solid by:</span>
                         <span style={{fontWeight:'bolder'}}> Amazon</span>
                     </div>
                </div>
            </div>


            <div className="reviews row my-5 pt-3">
                <div className='col-4'>
                    <hr />
                    <SetReview 
                    product={productId}
                    reviews={reviews}
                    setReviews={setReviews}

                    />
                </div>

                <div className='col-6'>
                    <hr />
                    <h2 className='p-1'>Customers reviews</h2>
                    {
                        reviews?
                        reviews.map( rev =>(
                            <div className='my-5'>
                                <div className='user-data'>
                                    <img src={rev.user.image} alt="" />
                                    <span className='h5 ms-1'>{rev.user.name}</span>
                                </div>

                                <Stars rating={rev.rating} color="orange"/> 

                                <p>{rev.comment}</p>
                            </div>
                        ))
                        :<p>There is no reviews for this product</p>
                    }
                </div>
            </div>
            </div>
           
        );
    }

export default ProductDetalis;