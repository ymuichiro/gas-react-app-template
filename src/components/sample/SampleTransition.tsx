import React, { } from "react";
import { makeStyles, createStyles, Container, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({
    root: {
        flexGrow: 1,
        transition: theme.transitions.create(["opacity"]),
        "&:hover": {
            opacity: 0.3,
        }
    }
}));

export const SampleTransition = () => {
    const classes = useStyle()
    return <Container>
        <Typography
            variant="h1"
            className={classes.root}
            align="center"
        >Hover
        </Typography>
    </Container>
}