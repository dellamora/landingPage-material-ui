import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
  },
  btnIcon: {
    color: "#fff",
    fontSize: "1rem",
  },
  appTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appMiddleTitle: {},
}));

export default useStyles;
