import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const ContactUs = () => {
    const [alert, setAlert] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        setAlert(false);
        fetch('https://gentle-depths-60007.herokuapp.com/contactUs', {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({ ...data })
        })
            .then(res => res.json())
            .then(result => {
                reset();
                if (result) {
                    setTimeout(setAlert(true), 2000);
                }
            });
    };
    return (
        <div>
            {alert &&
                <Alert style={{ maxWidth: "40%", margin: "30px auto" }} severity="success">Message Sent</Alert>
            }
            <div className="AdminClass">


                <h3 className="text-center">Contact Us</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <span className="RequiredMsg">Name is required</span>}
                    <input type="text"   {...register("name", { required: true })} placeholder="Your  Name" />

                    {errors.email && <span className="RequiredMsg">Email is required</span>}
                    <input type="email"   {...register("email", { required: true })} placeholder="Your  Email" />


                    {errors.description && <span className="RequiredMsg">Description is required</span>}
                    <textarea id="" cols="30" rows="4" {...register("description", { required: true })} placeholder="Enter Description" ></textarea>
                    <input type="submit" value="Send Message" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;