import React, { RefObject, CSSProperties } from "react";
import { TextField, Grid, Typography, Box, } from "@material-ui/core";
import { FieldError } from "react-hook-form";

type ITelNoForm = {
	name: string,
	label: string,
	variant: "standard" | "filled" | "outlined",
	setValue: Function,
	register: ((instance: any) => void) | RefObject<any> | null | undefined,
	errors?: (FieldError | undefined)[] | undefined,
	class?: string,
	css?: CSSProperties,
}

export const TelNoForm = (props: ITelNoForm) => {


	/** 正しい数値に都度変換する */
	const blurHundle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const value = e.currentTarget.value;
		const name = e.currentTarget.getAttribute("name");
		if (name === null) throw new Error("System Error: getAttributeへの引数が適切ではありません");
		// 数値以外の文字が含まれていた場合、入力値を削除する
		for (const v of value.split("")) {
			if (Number(v).toString() === "NaN") {
				props.setValue(name, "");
				alert("入力が正しくありません");
				return;
			}
		}
	}

	return <Grid container justify="center" alignItems="center" spacing={1}>
		<Grid item xs={3}>
			<TextField
				name={`${props.name}[0]`}
				label={props.label}
				margin="dense"
				variant={props.variant}
				onBlur={blurHundle}
				fullWidth
				inputRef={props.register}
				className={props.class === undefined ? "" : props.class}
				style={props.css === undefined ? {} : props.css}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			{props.errors && props.errors[0] && <Box color="error.main">入力必須です</Box>}
		</Grid>
		<Grid item xs={1}>
			<Typography align="center">ー</Typography>
		</Grid>
		<Grid item xs={3}>
			<TextField
				name={`${props.name}[1]`}
				margin="dense"
				variant={props.variant}
				onBlur={blurHundle}
				inputRef={props.register}
				fullWidth
				className={props.class === undefined ? "" : props.class}
				style={props.css === undefined ? {} : props.css}
			/>
			{props.errors && props.errors[1] && <Box color="error.main">入力必須です</Box>}
		</Grid>
		<Grid item xs={1}>
			<Typography align="center">ー</Typography>
		</Grid>
		<Grid item xs={4}>
			<TextField
				name={`${props.name}[2]`}
				margin="dense"
				variant={props.variant}
				onBlur={blurHundle}
				inputRef={props.register}
				fullWidth
				className={props.class === undefined ? "" : props.class}
				style={props.css === undefined ? {} : props.css}
			/>
			{props.errors && props.errors[2] && <Box color="error.main">入力必須です</Box>}
		</Grid>
	</Grid>

}