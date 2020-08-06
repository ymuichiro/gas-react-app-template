import React, { useContext, createRef } from "react";
import { Header } from "../components/toolbar/Header";
import { Link } from "react-router-dom";
import { Database } from "../context";
import { makeStyles, createStyles, Button, Container, Grid, Box } from "@material-ui/core";
import { BaseForm } from "../components/form/BaseForm";
import { SampleTransition } from "../components/sample/SampleTransition";
import { SampleTransitionIn } from "../components/sample/SampleTransitionIn";
import { SimpleCard } from "../components/card/SimpleCard";

const useStyle = makeStyles(theme => createStyles({
	headerSpacer: theme.mixins.toolbar,
	root: {
		flexGrow: 1,
		// はみ出た要素を非表示にする
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	rootingBtn: {
		textDecoration: "none",
	},
}));

export function TopPage() {
	const classes = useStyle();
	const db = useContext(Database);

	const ref = createRef();

	return <div className={classes.root}>
		<Header />
		<Box className={classes.headerSpacer} />
		<SampleTransition />
		<SampleTransitionIn />
		<SimpleCard {...{ innerElement: <Box bgcolor="palevioletred" color="white" p={10}>content</Box> }} />
		<Container>
			<Grid container spacing={1}>
				<Grid item xs={12}  >
					<BaseForm />
				</Grid>
				<Grid item xs={12}>
					<hr />
					<Link className={classes.rootingBtn} to="/about">
						<Button
							color="secondary"
							variant="contained"
							fullWidth
							className={classes.rootingBtn}
						>
							About
                        </Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	</div>
}