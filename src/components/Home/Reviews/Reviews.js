import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import Review from '../Review/Review';
import "./Reviews.css";
import line from "../../../images/line-white.png";

const Reviews = () => {

    const [getReviews, setGetReviews] = useState([]);

    useEffect(() => {
        fetch("https://gentle-depths-60007.herokuapp.com/getreviews").then(res => res.json()).then(data => setGetReviews(data));
    }, [getReviews]);


    return (
        <section className="reviews">
            <h1>Reviews</h1>
            <img className="centerImage" src={line} alt="" />
            <Carousel>
                {
                    getReviews.map(review => <Review review={review} key={review._id} />)
                }

            </Carousel>
        </section>

    );
};

export default Reviews;