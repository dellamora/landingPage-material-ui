import { CssBaseline } from "@material-ui/core";
import useStyles from "./styles";
import Header from "./components/header/index";
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
}
