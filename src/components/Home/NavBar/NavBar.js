
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoggedInContext } from '../../../App';
import logo from "../../../images/logo.png";
import "./Navbar.css";
import firebase from 'firebase';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const { image, name, isAdmin, isLoggedIn } = loggedInUser;

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({ isLoggedIn: false });

        }).catch((error) => {

        });
    }
    return (
        <div>
            <Navbar bg="light" className="px-5" expand="lg">
                <Navbar.Brand href="/"><img src={logo} height="60px" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="float-right">
                        <Link className="navbar-light navbar-nav nav-link" to="/">Home</Link>

                        <Link className="navbar-light navbar-nav nav-link" to="#class">Our Classes</Link>
                        <Link className="navbar-light navbar-nav nav-link" to="#class">Our Teachers</Link>
                        <Link className="navbar-light navbar-nav nav-link" to="#review">Reviews</Link>
                        <Link className="navbar-light navbar-nav nav-link" to="#contactUs">Contact Us</Link>

                        {/* {isAdmin && <Link className="navbar-light navbar-nav nav-link" to="/admin/addClass">Add Class</Link>}

                        {isAdmin && <Link className="navbar-light navbar-nav nav-link" to="/admin/addTeacher">Add Teacher</Link>}

                        {isAdmin && <Link className="navbar-light navbar-nav nav-link" to="/admin/addAdmin">Add Admin</Link>}

                        {!isAdmin && isLoggedIn && <Link className="navbar-light navbar-nav nav-link" to="/user/addReview">Add Review</Link>} */}
                        {isLoggedIn &&
                            < Link className="navbar-light navbar-nav nav-link" to="/dashbord">Dashbord</Link>

                        }
                        {!isLoggedIn && < Link className="navbar-light navbar-nav nav-link" to="/login">Login</Link>}

                        {isLoggedIn && <Link className="navbar-light navbar-nav nav-link" onClick={handleSignOut} to="/">LogOut</Link>}

                        {isLoggedIn && <Link className="navbar-light navbar-nav nav-link" ><p className="text-success">{name} ({isAdmin ? "Admin" : "User"})</p></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;