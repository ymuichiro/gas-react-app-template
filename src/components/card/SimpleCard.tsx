import React, { } from "react";
import { makeStyles, createStyles, Container, CardContent, Card, Box, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({
    card_title: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textAlign: "center",
    }
}));

export const SimpleCard = () => {
    const classes = useStyle()
    return <Container>
        <Card>
            <CardContent className={classes.card_title}>
                Card Title
            </CardContent>
            <CardContent >
                <Grid container spacing={0} justify="center" alignItems="center" style={{ height: "30vh" }}>
                    <Box>
                        Content
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    </Container>
}