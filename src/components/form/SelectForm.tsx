import React, { CSSProperties, useState, Fragment } from "react";
import { TextField, Menu, MenuItem, Box } from "@material-ui/core";
import { FieldError } from "react-hook-form";

type ISelectForm = {
	name: string,
	label: string,
	register: any,
	setValue: Function,
	errors?: FieldError | undefined,
	optionsKey: string[],
	class?: string,
	css?: CSSProperties,
}



/**
 * React Hooks Formにて利用するテキスト入力用フォームを提供する
 * @param props
 */
export const SelectForm = (props: ISelectForm) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [value, setValue] = useState<string>("");

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setAnchorEl(null);
		const keyData = event.currentTarget.getAttribute("key-data");
		if (keyData !== null) {
			setValue(keyData);
		};
	}

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	}

	const PopUpMenu = () => {
		return <Menu
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={handleClose}
		>
			{
				props.optionsKey.map((key, index) => <MenuItem
					key={index}
					key-data={key}
					onClick={handleClose}
				>
					{key}
				</MenuItem>)
			}
		</Menu>
	}

	return <Fragment>
		<TextField
			name={props.name}
			label={props.label}
			inputRef={props.register}
			value={value}
			onChange={handleChange}
			className={props.class === undefined ? "" : props.class}
			style={props.css === undefined ? {} : props.css}
			onFocus={handleClick}
		/>
		<PopUpMenu />
		{props.errors && <Box color="error.main">入力必須です</Box>}
	</Fragment>
}
