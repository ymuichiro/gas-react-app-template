import React, { RefObject, CSSProperties, Fragment } from "react";
import { TextField, Box, } from "@material-ui/core";
import { FieldError } from "react-hook-form";

type INumForm = {
	name: string,
	label: string,
	variant: "standard" | "filled" | "outlined",
	setValue: Function,
	errors: FieldError | undefined,
	register: ((instance: any) => void) | RefObject<any> | null | undefined,
	class?: string,
	css?: CSSProperties,
}

/**
 * React Hooks Formにて利用する数値入力用フォームを提供する
 * @param props
 */
export const NumForm = (props: INumForm) => {

	/** 正しい数値に都度変換する */
	const watchValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		if (e.currentTarget.value === "") {
			props.setValue(props.name, "");
		} else {
			props.setValue(props.name, Number(e.currentTarget.value));
		}
	}

	return <Fragment>
		<TextField
			name={props.name}
			label={props.label}
			margin="dense"
			variant={props.variant}
			type="number"
			onChange={watchValue}
			inputRef={props.register}
			className={props.class === undefined ? "" : props.class}
			style={props.css === undefined ? {} : props.css}
		/>
		{props.errors && <Box color="error.main">入力必須です</Box>}
	</Fragment>

}