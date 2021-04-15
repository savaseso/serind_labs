import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
    border: "none",
    width: "150px",
    height: "52px",
    marginTop: "20px",
    borderRadius: "30px",
    marginLeft: "2rem",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: "#617EE9",
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  },
  input: {
    [`& fieldset`]: {
      borderRadius: 30,
    },
  },
  select: {
    borderRadius: 30,
  },
}));

export default useStyles;
