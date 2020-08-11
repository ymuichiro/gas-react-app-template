import React, { RefObject, CSSProperties, Fragment } from "react";
import { TextField, Box } from "@material-ui/core";
import { FieldError } from "react-hook-form";

type IEmailForm = {
	name: string,
	label: string,
	register: ((instance: any) => void) | RefObject<any> | null | undefined,
	variant: "standard" | "filled" | "outlined",
	errors: FieldError | undefined,
	class?: string,
	css?: CSSProperties,
}

/**
 * React Hooks Formにて利用するテキスト入力用フォームを提供する
 * @param props
 */
export const EmailForm = (props: IEmailForm) => {

	return <Fragment>
		<TextField
			margin="dense"
			name={props.name}
			label={props.label}
			inputRef={props.register}
			variant={props.variant}
			type="email"
			className={props.class === undefined ? "" : props.class}
			style={props.css === undefined ? {} : props.css}
		/>
		{props.errors && <Box color="error.main">入力必須です</Box>}
	</Fragment>
}