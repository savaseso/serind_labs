import React, { useState, useEffect } from "react";
import useStyles from "../css/form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const SearchForm = ({ getMovies }) => {
  const [state, setState] = useState({ movie: "", type: "", year: "" });
  const classes = useStyles();

  useEffect(() => {
    //populate form field values
    const localStorageState = localStorage.getItem("state");
    if (localStorageState) {
      setState(JSON.parse(localStorageState));
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  return (
    <form className={classes.form} onSubmit={(e) => getMovies(e, state)}>
      <TextField
        name="movie"
        type="text"
        variant="outlined"
        margin="normal"
        size="medium"
        label="Movie title"
        className={classes.input}
        required
        id="movie"
        value={state.movie}
        autoComplete="movie"
        autoFocus
        onChange={(e) => handleChange(e)}
      />
      <FormControl variant="outlined">
        <Select
          name="type"
          label="Type"
          className={classes.select}
          value={state.type}
          onChange={(e) => handleChange(e)}
        >
          <InputLabel htmlFor="outlined-type-native-simple">Type</InputLabel>
          <MenuItem name="movie" value="movie">
            movie
          </MenuItem>
          <MenuItem name="series" value="series">
            series
          </MenuItem>
          <MenuItem name="episode" value="episode">
            episode
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="year"
        type="text"
        variant="outlined"
        margin="normal"
        size="medium"
        label="Year"
        className={classes.input}
        id="year"
        inputProps={{ minLength: 4 }}
        value={state.year}
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit" className={classes.button}>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
