import React, { RefObject, CSSProperties } from "react";
import { TextField, makeStyles, createStyles, Typography } from "@material-ui/core";
import { FieldError } from "react-hook-form";

type ISimpleTextForm = {
    name: string,
    label: string,
    register: ((instance: any) => void) | RefObject<any> | null | undefined,
    variant: "standard" | "filled" | "outlined",
    errors: FieldError | undefined,
    errorMsgs?: string,
    class?: string,
    css?: CSSProperties,
}

const useStyle = makeStyles(theme => createStyles({
    errorText: {
        color: theme.palette.error.main,
    },
}));

/**
 * React Hooks Formにて利用するテキスト入力用フォームを提供する
 * @param props
 */
export const SimpleTextForm = (props: ISimpleTextForm) => {
    const classes = useStyle();

    return <div>
        <TextField
            margin="dense"
            name={props.name}
            label={props.label}
            inputRef={props.register}
            variant={props.variant}
            className={props.class === undefined ? "" : props.class}
            style={props.css === undefined ? {} : props.css}
        />
        {
            props.errors && <Typography variant="body2" className={classes.errorText}>
                {props.errorMsgs === undefined ? "入力エラー" : props.errorMsgs}
            </Typography>
        }
    </div>
}