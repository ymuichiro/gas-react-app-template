import React, { RefObject, useEffect, Dispatch, SetStateAction, Fragment } from "react";
import { TextField, Button, makeStyles, createStyles, Grid, IconButton, List, ListItem } from "@material-ui/core";


type ITableForm = {
	name: string,
	label: string,
	maxRows: number,
	variant: "standard" | "filled" | "outlined",
	setValue: Function,
	register: ((instance: any) => void) | RefObject<any> | null | undefined,
	class?: string,
}

const useStyle = makeStyles(theme => createStyles({
	listRoot: {
		flexGrow: 1,
	},
	deleteRowButton: {
		display: "block",
		margin: "0 0 0 auto",
	},
}));

/**
 * React Hooks Formにて利用する動的テーブル形式フォームを提供する
 * @param props
 */
export const TableForm = (props: ITableForm) => {
	const classes = useStyle();
	const [count, setCount] = React.useState<number[]>([0]);

	/** 行を追加する */
	const addHundle = () => {
		if (count.length >= props.maxRows) return;
		setCount(() => [...count, count.length]);
	};

	/** 最終行を削除する */
	const deleteHundle = () => {
		if (count.length === 1) return
		setCount(e => e.filter(num => num !== e.length - 1));
	};

	/** 数値入力フォームで数値のみ入力を受け付ける */
	const numCheck = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (e.currentTarget.value === "") {
			props.setValue(e.currentTarget.getAttribute("name"), "");
		} else {
			props.setValue(e.currentTarget.getAttribute("name"), Number(e.currentTarget.value));
		}
	}

	return <Fragment>
		<List className={classes.listRoot}>
			{
				/** count stateの配列数により動的にListItemを作成する */
				count.map(num => <ListItem key={num} style={{ padding: "0" }}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								fullWidth
								margin="dense"
								variant={props.variant}
								name={`${props.name}[${num}].matter`}
								label={props.label}
								inputRef={props.register}
							/>
						</Grid>
						<Grid item xs={2}>
							<TextField
								fullWidth
								margin="dense"
								variant={props.variant}
								name={`${props.name}[${num}].nums`}
								label="数量"
								type="number"
								inputRef={props.register}
								onChange={numCheck}
							/>
						</Grid>
						<Grid item xs={3}>
							<TextField
								fullWidth
								margin="dense"
								variant={props.variant}
								name={`${props.name}[${num}].amount`}
								label="単価"
								type="number"
								inputRef={props.register}
								onChange={numCheck}
							/>
						</Grid>
						<Grid item xs={1}>
							<IconButton onClick={addHundle}>
								<i className="material-icons">add_circle</i>
							</IconButton>
						</Grid>
					</Grid>
				</ListItem>)
			}
		</List>
		<Button
			variant="outlined"
			color="primary"
			size="small"
			onClick={deleteHundle}
			className={classes.deleteRowButton}
		>
			最終行削除
        </Button>
	</Fragment>
}