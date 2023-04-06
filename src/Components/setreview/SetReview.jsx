import React from 'react';
import './SetReview.css'
import { useState, useRef } from "react";
import axios from 'axios';


const SetReview = (props) => {
    const {product, reviews, setReviews} = props;
    const [rating, setrating] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);
    const inputRef = useRef(null);

    

    function handleSubmit() {
      // inputRef.current.value = 'New value';
      const comment =inputRef.current.value;
      // console.log(rating,comment);
      

      axios.post("http://localhost:8000/reviews", {
        rating,
        comment,
        product,
        user:'6416d0c1792b554cdcf54953'
    },{
      headers: {
        'content-type': 'application/json',
        'authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDE2ZDBjMTc5MmI1NTRjZGNmNTQ5NTMiLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNjgwNjQ3MjYzLCJleHAiOjE2ODA2OTA0NjN9.qrWtdB_fJXNvOYXc3OLtmAP9pnxzr7jSCQ4rW3OGtKk'
      }
    })
    .then((response) => {
      console.log(response);
      setReviews([...reviews,response.data.data]);

      inputRef.current.value = '';
      setrating(0)
    });

    }

    return (
        <div className="review-content">
          <h2>Add Your Comment</h2>
          <div>
            <span className='h4 d-block text-info'>Set Ratings</span>
            {Array(5)
              .fill()
              .map((_, index) =>
                 (
                    <i
                        key={index}
                        className={rating >= index + 1 || hoverStar >= index + 1 ?
                          "starBtn bi bi-star-fill"
                          :"starBtn bi bi-star"
                        }
                        onMouseOver={() => !rating && setHoverStar(index + 1)}
                        onMouseLeave={() => setHoverStar(undefined)}
                        onClick={() => setrating(index + 1)}
                    />
                  )
              )}
          </div>
          <textarea 
          placeholder='Set Comment ...' 
          style={{height:'300px'}}
          ref={inputRef}
          />
          
          <button 
            className={` ${!rating && "disabled"} btn btn-warning`}
            onClick = {handleSubmit}
          >
            Submit
          </button>
        </div>
    );
};

export default SetReview;