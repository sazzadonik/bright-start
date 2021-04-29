import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import line from "../../../images/line-white.png"
import Class from '../Class/Class';
import "./ClassInfo.css"

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1, padding: "10px 50px", marginTop: "50px" },
    justifyItem: { display: "flex", justifyContent: "space-around" }
}));


const ClassInfo = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("https://gentle-depths-60007.herokuapp.com/getclasses")
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [classes]);

    const styleComponent = useStyles();
    return (
        <section className="OurClasses" id="class">
            <h1>Our Classes</h1>
            <img className="centerImage" src={line} alt="" />

            <div className={styleComponent.root}>
                <Grid container className={styleComponent.justifyItem} spacing={3}>
                    {
                        classes.map(getClass => < Class class={getClass} key={getClass._id} />)
                    }
                </Grid>
            </div>
        </section>
    );
};

export default ClassInfo;