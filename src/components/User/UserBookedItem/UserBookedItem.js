import React from 'react';
import "./UserBookedItem.css";

const UserBookedItem = (props) => {
    const { title, time, date, status, imgSrc } = props.classItem;
    // {`data:image/jpeg;base64,${image.img}`}
    // console.log("booked", image)
    return (
        <div class="col-md-6  itemStatus">

            <div className="itemDiv bg-secondary p-3">
                <div className="imageDiv">
                    <img src={imgSrc} alt="" height="250px" width="100%" />
                </div>
                <div className="itemInfo m-3">
                    <h5>{title}</h5>
                    <small>Starting Time: {time} from {date}</small>
                    <p className="text-capitalize">Current Status: {status}</p>

                </div>
            </div>


        </div>
    );
};


export default UserBookedItem;