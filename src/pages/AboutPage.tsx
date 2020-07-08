import React from "react";
import Header from "../components/Header";
import * as ReactRouterDOM from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({
  root: { margin: theme.spacing(0) },
  rootingBtn: { textDecoration: "none" },
}));

export default function AboutPage() {
  return <div>
    <Header />
    <h1>About Page</h1>
    <ReactRouterDOM.Link to="/">Back to Home</ReactRouterDOM.Link>
  </div>;
}