import React, { useState, useEffect } from "react";
import useStyles from "../css/list";
import { Box, Typography } from "@material-ui/core";
import SearchForm from "../components/SearchForm";
import Movie from "../components/Movie";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";

const List = () => {
  const [searchResult, setSearchResult] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //populate search result values
    const searchRes = localStorage.getItem("searchResult");
    setSearchResult(JSON.parse(searchRes));
  }, []);

  const getMovies = async (e, state) => {
    e.preventDefault();
    try {
      const req = await fetch(
        `http://www.omdbapi.com/?s=${state.movie}&type=${state.type}&y=${state.year}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      const result = await req.json();

      //checking if there is movie
      if (result.Response === "True") {
        setSearchResult(result);
        localStorage.setItem("searchResult", JSON.stringify(result));
        localStorage.setItem("state", JSON.stringify(state));
      } else {
        toast.error(`${result.Error}`, { position: "bottom-right" });
      }
    } catch (err) {
      toast.error(`Something has happened :(`, { position: "bottom-right" });
    }
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography variant="h4">Search for a movie</Typography>
      </Box>
      <SearchForm getMovies={getMovies} />
      {searchResult.Search && (
        <Grid container spacing={3}>
          {searchResult.Search.map((movie) => (
            <Grid key={movie.imdbID} item xs={12} sm={6}>
              <Movie movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default List;
