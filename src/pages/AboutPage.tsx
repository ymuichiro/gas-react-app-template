import React, { useEffect } from "react";
import { Header } from "../components/toolbar/Header";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Box, Button, Typography } from "@material-ui/core";
import { CircleLoading } from "../components/loading/CircleLoading";

const useStyle = makeStyles(theme => createStyles({
    rootStart: {
        margin: theme.spacing(0),
        opacity: 0,
        backgroundColor: theme.palette.background.paper,
    },
    rootEnd: {
        margin: theme.spacing(0),
        opacity: 1,
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeOut,
            duration: 2000,
            delay: 0,
        }),
    },
    rootingBtn: {
        textDecoration: "none",
    },
}));

export function AboutPage() {
    const classes = useStyle();
    const [loadFlag, setLoadFlag] = React.useState<boolean>(false);

    /* 初回起動時の処理を記載する */
    useEffect(() => {
        setTimeout(() => setLoadFlag(true), 1000);
    }, [])

    return <div>
        {/* 初回ロード用要素 */}
        <CircleLoading {...{ watch: loadFlag }} />
        <div className={loadFlag ? classes.rootEnd : classes.rootStart}>
            <Header />
            <Box style={{ height: "30vh" }}>
                <Typography variant="h2" align="center">About Page</Typography>
            </Box>
            <Link className={classes.rootingBtn} to="/">
                <Button
                    color="secondary"
                    variant="contained"
                    fullWidth
                    className={classes.rootingBtn}
                >
                    Back To Home
                        </Button>
            </Link>
        </div>
    </div>;
}