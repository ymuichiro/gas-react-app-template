import React, { useEffect } from "react";
import { makeStyles, createStyles, Container, Grid, CircularProgress } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({
    rootStart: {
        position: "absolute",
        top: 0,
        left: 0,
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        opacity: 0.2,
        zIndex: 9999,
    },
    rootEnd: {
        position: "absolute",
        top: 0,
        left: 0,
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        zIndex: 9999,
        opacity: 1,
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
            delay: 0,
        })
    },
    rootNext: {
        position: "absolute",
        top: 0,
        left: 0,
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.background.paper,
        opacity: 0,
        zIndex: 0,
        transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
            delay: 0,
        })
    },

}));

/** アニメーションの終了はWatchに渡す親要素のBoolean要素にて判定する */
export const CircleLoading = (P: { watch: boolean }) => {
    const classes = useStyle();
    const [flag, setFlag] = React.useState<boolean>(false);

    /** 開始時にふんわりとローディングを表示する */
    useEffect(() => {
        setFlag(true);
    }, [])

    return <Container>
        <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
            className={
                flag
                    ? !P.watch
                        ? classes.rootEnd
                        : classes.rootNext
                    : classes.rootStart
            }
        >
            <CircularProgress
                color="primary"
                size={150}
            />
        </Grid>
    </Container >
}
