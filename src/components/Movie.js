import React from "react";
import useStyles from "../css/movie";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const classes = useStyles();
  const { imdbID:id, Poster, Title, Year, Type } = movie;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Poster} title={Title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
          <Typography color="textSecondary" component="p">
            {Year}
          </Typography>
          <Typography color="textSecondary" component="p">
            {Type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button className={classes.button} size="small" color="primary">
          <Link className={classes.link} to={`detail/${id}`}>
            Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
