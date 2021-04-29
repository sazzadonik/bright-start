import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const AddReview = () => {
    const [alert, setAlert] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        setAlert(false);
        fetch('https://gentle-depths-60007.herokuapp.com/addReview', {
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
                <Alert style={{ maxWidth: "40%", margin: "30px auto" }} severity="success">New Review Added</Alert>
            }
            <div className="AdminClass">


                <h3>Add A Review</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <span className="RequiredMsg">Name is required</span>}
                    <input type="text"   {...register("name", { required: true })} placeholder="Your  Name" />

                    {errors.relation && <span className="RequiredMsg">Select Relation</span>}
                    <select {...register("relation", { required: true })} placeholder="Relation" >
                        <option value="">Select Relation</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                    </select>

                    {errors.description && <span className="RequiredMsg">Description is required</span>}
                    <textarea id="" cols="30" rows="4" {...register("description", { required: true })} placeholder="Enter Description" ></textarea>
                    <input type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;