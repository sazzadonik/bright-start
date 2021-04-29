import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';

const AddTeacher = () => {
    const [alert, setAlert] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("file", data.file[0]);


        fetch('https://gentle-depths-60007.herokuapp.com/addTeacher', {
            method: "POST",
            body: formData
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
                <Alert style={{ maxWidth: "40%", margin: "30px auto" }} severity="success">New teacher Added</Alert>
            }
            <div className="AdminClass">


                <h3>Add A Teacher</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <span className="RequiredMsg">Name is required</span>}
                    <input type="text"   {...register("name", { required: true })} placeholder="Enter Teacher's Name" />
                    {errors.email && <span className="RequiredMsg">Email is required</span>}
                    <input type="email"  {...register("email", { required: true })} placeholder="Enter Teacher's Email" />
                    {errors.teacherImage && <span className="RequiredMsg">Image is required</span>}
                    <input type="file" {...register("file", { required: true })} />
                    <input type="submit" value="Add Teacher" />
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;