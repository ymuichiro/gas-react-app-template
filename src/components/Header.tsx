import React from "react";
import { AppBar, Toolbar, IconButton, Typography, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles();

  return <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <i className={"material-icons"}>menu</i>
        </IconButton>
        <Typography variant="h6" className={classes.title}>Site Name</Typography>
      </Toolbar>
    </AppBar>
  </div>
}