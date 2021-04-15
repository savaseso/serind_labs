import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "../css/detail";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({ details: {} });
  const { Title, Poster, Type, Year, Released, Genre, Ratings } = movie.details;
  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    const getMovieById = async (id) => {
      try {
        const req = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
        );
        const result = await req.json();

        //checking if there is movie with that id
        if (result.Response === "True") {
          setMovie({ details: result });
        } else {
          toast.error(`No movie found with this id`, {
            position: "bottom-right",
          });
          history.push("/");
        }
      } catch (err) {
        toast.error(`Something has happened :(`, { position: "bottom-right" });
      }
    };

    getMovieById(id);
  }, [id, history]);

  const getRatings = (ratings) => {
    return ratings.map((rating) => {
      return (
        <Typography key={rating.Value} color="textSecondary" component="p">
          {rating.Source}: {rating.Value}
        </Typography>
      );
    });
  };

  return (
    <>
      <div className={classes.container}>
        <Button className={classes.button} size="small" color="primary">
          <Link className={classes.link} to={`/`}>
            Back
          </Link>
        </Button>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={Title}
              src={Poster}
              title={Title}
              className={classes.media}
            />
            <CardContent>
              <Typography component="h1">Title: {Title}</Typography>
              <Typography color="textSecondary" component="p">
                Year: {Year}
              </Typography>
              <Typography color="textSecondary" component="p">
                Type: {Type}
              </Typography>
              <Typography color="textSecondary" component="p">
                Released: {Released}
              </Typography>
              <Typography color="textSecondary" component="p">
                Genre: {Genre}
              </Typography>
              {Ratings && getRatings(Ratings)}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default Detail;
