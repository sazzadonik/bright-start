import React, { useContext, useEffect, useState } from 'react';
import { LoggedInContext } from '../../../App';
import UserBookedItem from '../UserBookedItem/UserBookedItem';
import "./UserBooked.css";

const UserBooked = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const [bookedClass, setBookedClass] = useState([]);
    const { email } = loggedInUser;
    useEffect(() => {
        fetch(`https://gentle-depths-60007.herokuapp.com/bookedClassUser?user=${email}`)
            .then(res => res.json())
            .then(data => setBookedClass(data))
    }, [bookedClass]);

    return (
        <div>
            {!bookedClass.length &&
                <h1 className="text-center mt-5">NO Items Found</h1>
            }
            <div className="container">
                <div className="row">
                    {
                        bookedClass.map(classItem => <UserBookedItem classItem={classItem} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserBooked;