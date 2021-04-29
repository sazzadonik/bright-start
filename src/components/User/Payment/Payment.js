import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51Ie2A6E7oV7UQg38WxsVxkCdQ3oZUnEHh3dRzE4UjUCkWhjaodM0ZfRr3bAGzlFM9XOeI9u9cC8io6MJ7JDHDVBt00GInE0s5f');


const Payment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}> </SimpleCardForm>
        </Elements>
    );
};

export default Payment;






