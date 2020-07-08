import React from "react";
import Header from "../components/Header";
import * as ReactRouterDOM from "react-router-dom";
import { Database } from "../Context";
import { makeStyles, createStyles, Typography } from "@material-ui/core";
import { PrimaryButton } from "../components/MyButtons";
import { google } from "../App";

const useStyle = makeStyles(theme => createStyles({
  root: { margin: theme.spacing(0) },
  rootingBtn: { textDecoration: "none" },
}));

const hundle = () => {
  google.script.run.withSuccessHandler(() => { }).recieveSpreadsheet();
}

export default function TopPage() {
  const classes = useStyle();
  const db = React.useContext(Database);
  return <div className={classes.root}>
    <Header />
    <Typography>Top Page {db.name}</Typography>
    <ReactRouterDOM.Link className={classes.rootingBtn} to="/about">
      <PrimaryButton {...{ fullWidth: false, innerText: "Back to about", func: hundle }} />
    </ReactRouterDOM.Link>
  </div>;
}