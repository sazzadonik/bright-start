import { Button } from '@material-ui/core';
import React from 'react';
import HeaderImage from "../../../images/header image.png"
import './Header.css'
const Header = () => {
    return (
        <section className="HeaderSection">
            <div className="container h-100">
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-md-6 h-50">
                        <img className="img-fluid h-100" src={HeaderImage} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Join in the colorful fastival with your baby</h2>
                        <Button variant="contained" color="primary">Join Now  </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header; <h1>Hello There</h1>