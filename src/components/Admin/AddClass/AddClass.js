import React from 'react';
import { useForm } from "react-hook-form";
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './AddClass.css'
import Alert from '@material-ui/lab/Alert';

const AddClass = () => {
    const [alert, setAlert] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("age", data.age);
        formData.append("time", data.time);
        formData.append("date", startDate.toDateString());
        formData.append("price", data.price);
        formData.append("file", data.file[0]);

        fetch('https://gentle-depths-60007.herokuapp.com/addClass', {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(result => {
                reset();
                if (result) {
                    setTimeout(setAlert(true), 2000);
                }
            });;
    };


    return (
        <div>
            { alert &&
                <Alert style={{ maxWidth: "40%", margin: "30px auto" }} severity="success">New Class Added</Alert>
            }
            <div className="AdminClass">
                <h3>Add A Class</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.title && <span className="RequiredMsg">Class title required</span>}
                    <input  {...register("title", { required: true })} placeholder="Enter Class Title" />
                    {errors.age && <span className="RequiredMsg">Age is required</span>}
                    <select {...register("age", { required: true })} placeholder="Select Starting Time" >
                        <option value="">Select Age Group</option>
                        <option value="2 - 4 years">2 - 4 years</option>
                        <option value="4 - 6 years">4 - 6 years</option>
                        <option value="6 - 8 years">6 - 8 years</option>
                        <option value="8 - 10 years">8 - 10 years</option>
                    </select>
                    {errors.time && <span className="RequiredMsg">Class Starting time is required</span>}
                    <select {...register("time", { required: true })} placeholder="Select Starting Time" >
                        <option value="">Select Starting Time</option>
                        <option value="8.00 am">8.00 am</option>
                        <option value="10.00 am">10.00 am</option>
                        <option value="12.00 am">12.00 pm</option>
                    </select>
                    <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    {errors.price && <span className="RequiredMsg">Price is required</span>}
                    <input type="number" {...register("price", { required: true })} placeholder="Enter Price in $" />

                    {errors.file && <span className="RequiredMsg">Image is required</span>}
                    <input type="file" {...register("file", { required: true })} />


                    <input type="submit" value="Add Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;