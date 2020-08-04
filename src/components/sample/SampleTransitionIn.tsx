import React, { } from "react";
import { makeStyles, createStyles, Container, Grid, Typography, Button } from "@material-ui/core";

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
    const [open, setOpen] = React.useState<boolean>(false);

    const transitionHundle = () => {
        return open === true ? classes.transitionStart : classes.transitionEnd;
    }

    return <Container>
        <Button
            onClick={() => setOpen(!open)}
            variant="contained"
        >
            TransitionStart
            </Button>

        <Typography
            variant="h1"
            className={classes.root + " " + transitionHundle()}
            align="center"
        >TransitionIn
        </Typography>
    </Container >
}