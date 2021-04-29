import { Button, Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import "./Class.css";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: "10px",
        position: "relative"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: "9000000",
        backgroundColor: "#fff",
        // width: "200px",
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 300,
        height: 200,
        transition: "all 1s",
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));


const Class = (props) => {
    const { title, age, time, date, price, image } = props.class;
    const history = useHistory();
    const imgSrc = `data:image/jpeg;base64,${image.img}`;
    const handleClick = () => {
        history.push({
            pathname: '/user/bookClass',
            state: { title, age, time, date, price, imgSrc },
        });
    }




    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className="priceDiv">
                <h2>${price}</h2>
            </div>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" className="text-secondary" variant="h5">{title}</Typography>
                    <Typography component="p" variant="p">{time} </Typography>
                    <Typography component="p" variant="p">{date} </Typography>
                    <Typography variant="subtitle1" >Age: {age}</Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button onClick={handleClick} variant="contained" color="primary" >Book NOw</Button>
                </div>
            </div>
            <CardMedia
                className={classes.cover + " backgroundImageCorrect"}
                image={`data:image/jpeg;base64,${image.img}`}
                title="Live from space album cover"
            />
        </Card >

    );
};

export default Class;