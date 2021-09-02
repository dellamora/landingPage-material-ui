import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/navBG.jpg"})`,
    backgroundRepeat: "noReapet",
    backgroundSize: "cover",
    boxShadow: "0 0 200px rgba(0,0,0,0.9) inset",
  },
}));

export default useStyles;
