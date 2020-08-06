import React, { } from "react";
import { makeStyles, createStyles, Container, CardContent, Card, Box, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({
	card_title: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		textAlign: "center",
	},
	card_content: {
		backgroundColor: theme.palette.background.paper,
	},
}));

export const SimpleCard = (P: { innerElement: JSX.Element }) => {
	const classes = useStyle()
	return <Container>
		<Card>
			<CardContent className={classes.card_title}>
				Card Title
            </CardContent>
			<CardContent >
				<Grid
					container
					spacing={0}
					justify="center"
					alignItems="center"
					style={{ height: "30vh" }}
				>
					<Box m={2}>
						{P.innerElement}
					</Box>
				</Grid>
			</CardContent>
		</Card>
	</Container>
}