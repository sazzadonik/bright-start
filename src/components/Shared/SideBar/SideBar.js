import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoggedInContext } from '../../../App';
import AddAdmin from '../../Admin/AddAdmin/AddAdmin';
import AddClass from '../../Admin/AddClass/AddClass';
import AddTeacher from '../../Admin/AddTeacher/AddTeacher';
import BookedClasses from '../../Admin/BookedClasses/BookedClasses';
import AddReview from '../../User/AddReview/AddReview';
import UserBooked from '../../User/UserBooked/UserBooked';
import "./SideBar.css";


const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const { isAdmin } = loggedInUser;
    const [redirectDashbord, setRedirectDashbord] = useState({ userBooked: true, addClass: true })
    const handleRedirect = (obj2) => {
        setRedirectDashbord(obj2)
    }

    return (
        <div>
            <div className="">
                <div className="row">
                    <div className="col-md-2 bg-primary p-5">
                        {!isAdmin &&
                            <div>
                                <Button onClick={() => handleRedirect({ userBooked: true })} className="w-100 mt-5">My Class</Button>

                                <Button onClick={() => handleRedirect({ userReview: true })} className="w-100 ">Add Review</Button>
                            </div>

                        }

                        {isAdmin && <div>
                            <Button onClick={() => handleRedirect({ addClass: true })} className="w-100">Add Class</Button>
                            <Button onClick={() => handleRedirect({ addAdmin: true })} className="w-100 ">Add Admin</Button>
                            <Button onClick={() => handleRedirect({ addTeacher: true })} className="w-100 ">Add Teacher</Button>
                            <Button onClick={() => handleRedirect({ manageClasses: true })} className="w-100 ">Manage</Button>
                        </div>}
                    </div>
                    <div className="col-md-10 dashbordItem bg-white mb-5">
                        {!isAdmin && redirectDashbord.userBooked && <UserBooked />}
                        {!isAdmin && redirectDashbord.userReview && <AddReview />}

                        {/* /***Admin**/}

                        {isAdmin && redirectDashbord.addClass && <AddClass />}
                        {isAdmin && redirectDashbord.addAdmin && <AddAdmin />}
                        {isAdmin && redirectDashbord.addTeacher && <AddTeacher />}
                        {isAdmin && redirectDashbord.manageClasses && <BookedClasses />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;