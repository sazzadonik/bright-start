import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';
import "./Teacher.css";

const useStyles = makeStyles({
    root: {
        width: 300,
        marginBottom: "20px",
        position: "relative"
    },
    media: {
        height: 140,
        transition: "all 1s",
    },
});

const Teacher = (props) => {
    const { name, image } = props.teacher;
    const classes = useStyles();

    console.log("Image Here", image);
    return (
        <Card className={classes.root + " CardMain"}>
            <CardActionArea>
                <CardMedia
                    className={classes.media + " imageTeacher"}
                    image={`data:image/jpeg;base64,${image.img}`}
                    title="Contemplative Reptile"
                />
                <CardContent className="teacherName">
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="teacherIconMain">
                <div className="TeacherIcon">
                    <ul>
                        <li><Nav.Link target="__blank" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link></li>
                        <li><Nav.Link target="__blank" href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></Nav.Link></li>
                        <li><Nav.Link target="__blank" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Nav.Link></li>

                    </ul>
                </div>
            </CardActions>
        </Card>
    );
};

export default Teacher;