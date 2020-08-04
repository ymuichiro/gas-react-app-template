import React, { CSSProperties, Ref, RefObject } from "react";
import { TextField, Button, Menu, MenuItem } from "@material-ui/core";

type ISelectForm = {
    name: string,
    label: string,
    register: any,
    setValue: Function,
    optionsKey: string[],
    class?: string,
    css?: CSSProperties,
}



/**
 * React Hooks Formにて利用するテキスト入力用フォームを提供する
 * @param props
 */
export const SelectForm = (props: ISelectForm) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const PopUpMenu = () => {
        return <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    }

    return <div>
        <TextField
            name={props.name}
            label={props.label}
            inputRef={props.register}
            className={props.class === undefined ? "" : props.class}
            style={props.css === undefined ? {} : props.css}
            onFocus={handleClick}
        />
        <PopUpMenu />
    </div>
}
