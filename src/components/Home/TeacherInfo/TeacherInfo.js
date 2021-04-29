import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import line from "../../../images/line-blue.png"
import Teacher from '../Teacher/Teacher';
import "./TeacherInfo.css"


const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1, padding: "10px 50px", marginTop: "50px" },
    justifyItem: { display: "flex", justifyContent: "space-around" }
}));

const TeacherInfo = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("https://gentle-depths-60007.herokuapp.com/getTeachers")
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [teachers]);

    const classes = useStyles();
    return (
        <section className="OurTeacher">
            <h1>Our Teacher</h1>
            <img className="centerImage" src={line} alt="" />

            <div className={classes.root}>
                <Grid container className={classes.justifyItem} spacing={3}>
                    {
                        teachers.map(teacher => <Teacher teacher={teacher} key={teacher._id} />)
                    }
                </Grid>
            </div>
        </section>
    );
};

export default TeacherInfo;