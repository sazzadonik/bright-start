import { DeleteForever } from '@material-ui/icons';
import React from 'react';
import "./ClassItem.css"

const ClassItem = (props) => {
    const { _id, email, title, payment, time, date, status, fileName } = props.class;
    const handleStatus = e => {
        const status = e.target.value;
        const id = _id;
        fetch("https://gentle-depths-60007.herokuapp.com/changeStatus", {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({ status, id })
        })
    }


    const handleDelete = (e) => {
        fetch(`https://gentle-depths-60007.herokuapp.com/delete?id=${_id}`, {
            method: "DELETE"
        }).then(res => res.json()).then(result => {

            if (result) {
                alert("Deleted Succesfully")
            }

        })
    }
    return (
        <tr>
            <td>{title}</td>
            <td>{email}</td>
            <td>{payment}</td>
            <td className="text-capitalize">{status}</td>
            <td><select onChange={handleStatus} className="" name="changeStatus" id="">
                <option value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>
                <option value="done">Done</option>
            </select></td>
            <td className="ActionDelete"><DeleteForever onClick={handleDelete} /> </td>
        </tr>
    );
};

export default ClassItem;