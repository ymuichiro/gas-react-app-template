import React from "react";
import Header from "../components/Header";
import * as ReactRouterDOM from "react-router-dom";
import { Database } from "../context";
import { makeStyles, createStyles } from "@material-ui/core";
import { callSpreadsheet } from "../gas/googleScriptRun";

const useStyle = makeStyles(theme => createStyles({
  root: { margin: theme.spacing(0) },
}));

export default function TopPage() {
  const classes = useStyle();
  const db = React.useContext(Database);

  return <div className={classes.root}>
    <Header />
    <h1>Top Page {db.name}</h1>
    <button onClick={callSpreadsheet}></button>
    <ReactRouterDOM.Link to="/about">Back to about</ReactRouterDOM.Link>
  </div>;
}