import React from "react";
import Header from "../components/Header";
import * as ReactRouterDOM from "react-router-dom";
import { Database } from "../context";
import { makeStyles, createStyles, Typography, Button } from "@material-ui/core";
import { google } from "../App";

const useStyle = makeStyles(theme => createStyles({
    root: { margin: theme.spacing(0) },
    rootingBtn: { textDecoration: "none" },
}));

const hundle = () => {
    google.script.run.withSuccessHandler(() => { }).recieveSpreadsheet();
}

export function TopPage() {
    const classes = useStyle();
    const db = React.useContext(Database);
    return <div className={classes.root}>
        <Header />
        <Typography>Top Page {db.name}</Typography>
        <ReactRouterDOM.Link className={classes.rootingBtn} to="/about">
            <Button>About</Button>
        </ReactRouterDOM.Link>
    </div>;
}