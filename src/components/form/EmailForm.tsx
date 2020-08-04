import React, { RefObject, CSSProperties } from "react";
import { TextField } from "@material-ui/core";

type IEmailForm = {
    name: string,
    label: string,
    register: ((instance: any) => void) | RefObject<any> | null | undefined,
    variant: "standard" | "filled" | "outlined",
    class?: string,
    css?: CSSProperties,
}

/**
 * React Hooks Formにて利用するテキスト入力用フォームを提供する
 * @param props
 */
export const EmailForm = (props: IEmailForm) => {

    return <TextField
        margin="dense"
        name={props.name}
        label={props.label}
        inputRef={props.register}
        variant={props.variant}
        type="email"
        className={props.class === undefined ? "" : props.class}
        style={props.css === undefined ? {} : props.css}
    />
}