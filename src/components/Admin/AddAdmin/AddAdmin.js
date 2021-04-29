import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://gentle-depths-60007.herokuapp.com/addAdmin`, {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({ ...data })
        }).then(res => res.json()).then(data => {
            if (data) {
                reset();
            }
        });
    };

    return (
        <div className="AdminClass">
            <h3>Add an Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.admin && <span className="RequiredMsg">Admin Email is required</span>}
                <input type="email"  {...register("admin", { required: true })} placeholder="Enter Admin Email" />
                <input type="submit" value="Add Admin" />
            </form>
        </div>
    );
};

export default AddAdmin;