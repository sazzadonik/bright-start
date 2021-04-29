import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import image from "../../../images/man1.png"
import "./Review.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: "20px",
        margin: "50px auto",
        display: "block",
        transition: "all 1s",
    },
    media: {
        height: "200px",
        transition: "all 1s",
    },
});

const Review = (props) => {
    const { name, relation, description } = props.review;
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="text-center">
                        {name}

                    </Typography>
                    <small className="text-secondary relation d-block text-center">{relation}</small>
                    <Typography variant="body2" color="textSecondary" component="p" className="text-center">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
};

export default Review;