import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import SortIcon from "@material-ui/icons/Sort";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appTitle}>titulo here</h1>
        <IconButton>
          <SortIcon className={classes.btnIcon} />
        </IconButton>
      </Toolbar>
      <h1 className={classes.appMiddleTitle}>titulo ssere</h1>{" "}
    </AppBar>
  );
}
