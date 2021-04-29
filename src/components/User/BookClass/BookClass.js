import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import "./BookClass.css"
import Payment from '../Payment/Payment';
import { LoggedInContext } from '../../../App';

const BookClass = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const { email, isAdmin } = loggedInUser;
    const location = useLocation();
    const classInfo = location.state;
    // const { title, price, imgSrc } = classInfo;
    const { title, age, time, date, price, imgSrc } = classInfo;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("age", age);
    formData.append("time", time);
    formData.append("date", date);
    formData.append("price", price);
    formData.append("imgSrc", imgSrc);
    formData.append("email", email);
    formData.append("payment", "stripe");
    formData.append("status", "pending");



    const { register } = useForm();
    const history = useHistory();


    /* const formData = new FormData();
     formData.append("imageImg", image);*/


    if (isAdmin === true) {
        history.push("/dashbord");
    }

    const handlePayment = paymentId => {
        fetch("https://gentle-depths-60007.herokuapp.com/bookedClass", {
            method: "POST",
            body: formData
            /*headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({ ...classInfo, payment: "Stripe", email: email, status: "pending" })*/
        }).then(res => res.json())
            .then(result => {
                if (result) {
                    history.push("/dashbord")
                }
            })
    };

    console.log("My Image", imgSrc);
    return (
        <div>
            <div className="AdminClass">
                <h3 className="text-center">Book Your Class</h3>
                <form>
                    <input type="text" value={title}  {...register("name", { required: true })} disabled placeholder="Course Title" />

                    <input type="email" value={email} disabled  {...register("email", { required: true })} placeholder="Your Email" />
                    <input type="price" disabled value={"$ " + price}   {...register("price", { required: true })} placeholder="Price of the Class" />

                    <input className="w-25 d-inline-block" type="radio" id="creditCard" checked name="payment" value="Credit" />
                    <label for="creditCard">Credit Card</label>

                    <input className="w-25 d-inline-block" type="radio" id="stripe" name="payment" value="Stripe" />
                    <label for="stripe">Stripe</label>
                </form>
                <Payment handlePayment={handlePayment} />
            </div>
        </div>
    );
};

export default BookClass;