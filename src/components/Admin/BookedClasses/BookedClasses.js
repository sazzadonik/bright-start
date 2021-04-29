import React, { useEffect, useState } from 'react';
import ClassItem from '../ClassItem/ClassItem';
import "./BookedClasses.css"

const BookedClasses = () => {
    const [bookedClasses, setBookedClasses] = useState([]);

    useEffect(() => {
        fetch("https://gentle-depths-60007.herokuapp.com/allBookedClasses")
            .then(res => res.json())
            .then(data => setBookedClasses(data))
    }, [bookedClasses])


    return (
        <div>
            {!bookedClasses.length &&
                < h1 className="m-5 p-5"> No Items Found </h1>
            }
            <div className="container">
                <table id="customers" className="mt-5">
                    <tr>
                        <th>Class Title</th>
                        <th>Email</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Change Status</th>
                        <th>Action</th>
                    </tr>

                    {
                        bookedClasses.map(item => <ClassItem class={item} key={item._id} />)
                    }

                </table>

            </div>
        </div >
    );
};

export default BookedClasses;