import React, { useRef, useState, useContext } from "react";
import { makeStyles, createStyles, Container, Grid, Typography, Button } from "@material-ui/core";
import { IDatabase } from "../../../types/CommonType";
import { Database } from "../../context";

const useStyle = makeStyles(theme => createStyles({
    headerSpacer: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    transitionEnd: {
        // 待機時の位置をずらす
        transform: "translate(1000px,0px)",
        // 待機時は薄くする
        opacity: 0,
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
        }),
    },
    transitionStart: {
        opacity: 1,
        transform: "translate(0,0px)",
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
        }),
    },
    rootingBtn: {
        textDecoration: "none",
    },
}));

export const SampleTransitionIn = () => {
    const classes = useStyle();
    const db = useContext<IDatabase>(Database);
    const ref = useRef<HTMLDivElement>(null);

    /** 対象の要素の位置までScrollされた時にTransitionを実行する */
    const transitionHundle = () => {
        if (ref.current === null) return;
        return db.nowPosition < ref.current.offsetTop ? classes.transitionStart : classes.transitionEnd;
    }

    return <Container component="div" ref={ref}>
        <Typography
            variant="h1"
            className={classes.root + " " + transitionHundle()}
            align="center"
        >TransitionInOut
        </Typography>
    </Container >
}