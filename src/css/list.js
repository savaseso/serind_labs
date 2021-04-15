import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "3rem auto",
    width: "1000px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "2px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "3rem",
  }
}));

export default useStyles;
