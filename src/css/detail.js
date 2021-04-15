import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "3rem auto",
    height: "100%",
    width: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    width: "70%",
    margin: "1rem;",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginRight: theme.spacing(2),
    border: "none",
    width: "80px",
    height: "40px",
    marginTop: "20px",
    borderRadius: "30px",
    marginLeft: "2rem",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: "#617EE9",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

export default useStyles;
