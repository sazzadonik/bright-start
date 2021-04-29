import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setpaymentError] = useState(null);
    const [paymentSuccess, setpaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setpaymentError(error.message)
            setpaymentSuccess(null)
        } else {
            setpaymentSuccess(paymentMethod.id)
            handlePayment(paymentMethod.id)
            setpaymentError(null)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                {paymentError &&
                    <p style={{ color: "red" }}>{paymentError}</p>
                }
                {paymentSuccess &&
                    <p style={{ color: "green" }}>Your payment is Successful</p>
                }
                <input type="submit" className="mt-3" disabled={!stripe} value="Pay Now" />

            </form>

        </div>
    );
};

export default SimpleCardForm;




