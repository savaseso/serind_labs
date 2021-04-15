import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop:"100%",
    objectFit: "contain"
  },
  cardActions: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center"
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
    color: "#fff" ,
    "&:hover": {
      background: "#617EE9",
    },
  },
  link: {
      textDecoration:"none",
      color:"#fff"
  }
  
}));

export default useStyles;
